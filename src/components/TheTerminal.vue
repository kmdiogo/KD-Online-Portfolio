<template>
    <div class="the-terminal">
        <div class="the-terminal-inner" id="inner-terminal" v-on:keydown.tab="processAutoComplete">
            <span v-for="entry in history" v-html="entry"></span>
            <br v-if="history.length > 0"/>
            <div class="d-flex">
                <span style="margin-right: 5px;">{{curDirName}}> </span>
                <input class="terminal-input flex-grow-1" v-model="line" @keyup.enter="processCommand" @keyup.tab="processAutoComplete" ref="cmdLine" @keyup.up="fillCommandHistory" />
            </div>
        </div>
    </div>
</template>

<script>
    import {tree, convertTreeToArray} from "../constants/FileTree";

    export default {
        name: "TheTerminal",
        data() {
            return {
                line: '',
                curDirIndex: 0,
                curDirName: 'Root',
                history: [],
                parsed: [],
                treeArray: [],
                commandHistory: [],
                historyIndex: -1
            }
        },
        created() {
            convertTreeToArray(tree, null, this.treeArray);
        },
        computed: {
            curDir() {
                return this.treeArray[this.curDirIndex];
            },
        },
        methods: {
            fillCommandHistory(e) {
                // Looks at previous commands and fills in the terminal line when up key is pressed
                e.preventDefault();
                if (this.commandHistory.length > 0) {
                    // Check if user is scrolling through history or just starting
                    if (this.historyIndex === -1) {
                        this.historyIndex = this.commandHistory.length-1;
                        this.line = this.commandHistory[this.historyIndex];
                    }
                    else if (this.commandHistory[this.historyIndex] === this.line) {
                        this.historyIndex -= 1;
                        this.line = this.commandHistory[this.historyIndex];
                    }
                    else {
                        this.historyIndex = this.commandHistory.length-1;
                        this.line = this.commandHistory[this.historyIndex];
                    }
                }
            },
            processCommand() {
                let isValidCommand = true;
                this.parsed = this.line.split(' ');
                switch (this.parsed[0]) {
                    case 'cd':
                        this.processChangeDirectory();
                        break;
                    case 'open':
                        this.processOpenFile();
                        break;
                    case 'clear':
                        this.history = [];
                        break;
                    case 'ls':
                        this.processLS();
                        break;
                    case 'help':
                        this.processHelp();
                        break;
                    default:
                        this.history.push(`Unknown command '${this.parsed[0]}'`);
                        this.history.push("Type 'help' to see list of available commands");
                        isValidCommand = false;
                }

                if (isValidCommand) {
                    this.commandHistory.push(this.line);
                }
                this.line = '';

                // Timeout hack scroll terminal scrollbar to top
                setTimeout(function() {
                    let element = document.getElementById('inner-terminal');
                    element.scrollTop = element.scrollHeight;
                }, 10)


            },
            processChangeDirectory() {
                if (this.parsed.length < 2) return;
                if (this.parsed[1] === '') return;
                let splitPath = this.curDirName.split('/');

                // Augmented traverse function to modify path name as traverse is done
                let pathRaw = this.parsed[1];

                // Append slash if not present at end
                pathRaw = pathRaw[pathRaw.length-1] === '/' ? pathRaw : pathRaw + '/';
                let path = pathRaw.split('/');
                let cur = this.curDirIndex;
                // Iterate through file path while traversing the file tree
                for (let i=0; i < path.length-1; i++) {
                    if (path[i] === '..') {
                        if (this.treeArray[cur].parent == null) return;
                        cur = this.treeArray[cur].parent;
                        splitPath.pop();
                    }
                    else {
                        cur = this.searchDirectories(path[i], this.treeArray[cur].directories);
                        if (cur == null) {
                            this.history.push(`Directory '${this.parsed[1]}' not found`);
                            return;
                        }
                        else  {
                            splitPath.push(this.treeArray[cur].label);
                        }
                    }
                }
                this.curDirIndex = cur;
                this.curDirName = splitPath.join('/');
            },
            processOpenFile() {
                if (this.parsed.length < 2) return;
                if (this.parsed[1] === '') return;

                let path = this.parsed[1].split('/');
                let dir = this.traversePath(path, this.curDirIndex);
                if (dir != null) {
                    let fileIndex = dir.files.findIndex(obj => obj.name === path[path.length-1]);
                    if (fileIndex !== -1) {
                        if (this.$route.name !== dir.files[fileIndex].name)
                            this.$router.push({name: dir.files[fileIndex].name});
                    }
                    else {
                        this.history.push(`Cannot find file: '${this.parsed[1]}'`);
                    }
                }
                else {
                    this.history.push(`Cannot find file: '${this.parsed[1]}'`);
                }
            },
            processLS() {
                this.curDir.directories.forEach(dir => {
                    this.history.push(`<span style="color: lightblue">${this.treeArray[dir].label}/</span>`);
                });
                this.curDir.files.forEach(file => {
                    this.history.push(`<span style="color: blue">${file.name}</span>`);
                });
            },
            processAutoComplete(e) {
                e.preventDefault();
                this.parsed = this.line.split(' ');

                let directoryToSearch = this.curDir;

                let path = this.parsed[this.parsed.length-1].split('/');

                if (path[path.length-1] === '') return;
                if (path.length > 1 && path[1] !== '') {
                    directoryToSearch = this.traversePath(path, this.curDirIndex);
                    if (directoryToSearch == null) return;
                }


                let dirSearch = this.searchDirectories(path[path.length-1], directoryToSearch.directories);
                if (dirSearch) {
                    path[path.length-1] = this.treeArray[dirSearch].label + '/';
                    this.parsed[this.parsed.length-1] = path.join('/');
                    this.line = this.parsed.join(' ');
                    return;
                }


                let fileSearch = this.searchFiles(path[path.length-1], directoryToSearch.files);
                if (fileSearch) {
                    path[path.length-1] = fileSearch;
                    this.parsed[this.parsed.length-1] = path.join('/');
                    this.line = this.parsed.join(' ');
                }
            },
            processHelp() {
                this.history.push('Available commands: ');
                this.history.push('cd - changes current working directory ');
                this.history.push('ls - lists out contents of current working directory');
                this.history.push('open - loads specified page by the given filename');
                this.history.push('clear - clears the terminal');
            },
            traversePath(path, curDirIndex) {
                let cur = curDirIndex;
                for (let i=0; i < path.length-1; i++) {
                    if (path[i] === '..') {
                        if (this.treeArray[cur].parent == null) return;
                        cur = this.treeArray[cur].parent;
                    }
                    else
                        cur = this.searchDirectories(path[i], this.treeArray[cur].directories);

                    if (cur == null) return;
                }
                return this.treeArray[cur];
            },
            searchDirectories(search, directories) {
                for (let i=0; i < directories.length; i++) {
                    let nextDir = this.treeArray[directories[i]];
                    if (this.isOrderedSubstring(search, nextDir.label)) {
                        return directories[i];
                    }
                }
                return null;
            },
            searchFiles(search, files) {
                for (let i=0; i < files.length; i++) {
                    if (this.isOrderedSubstring(search, files[i].name)) {
                        return files[i].name;
                    }
                }
                return null;
            },
            isOrderedSubstring(s1, s2) {
                if (s1.length > s2.length)
                    return false;
                for (let i=0; i < s1.length; i++) {
                    if (s1[i].toUpperCase() !== s2[i].toUpperCase()) {
                        return false;
                    }
                }
                return true;
            },
            preventDefault(e) {
                e.preventDefault();
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/styles/variables';
    .the-terminal-inner {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: auto;
        background-color: $interior-bg;
        box-sizing: border-box;
        padding: 10px;
    }
    .terminal-input {
        font-family: 'Ubuntu Mono', monospace;
        background-color: transparent;
        color:white;
        border: none;
        outline:none;
    }
    .the-terminal {
        font-family: 'Ubuntu Mono', monospace;
        color: white;
        padding: 10px;
    }
</style>
