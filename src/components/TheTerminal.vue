<template>
    <div class="the-terminal">
        <div class="the-terminal-inner" id="inner-terminal" v-on:keydown.tab="processAutoComplete">
            <span v-for="entry in history" v-html="entry"></span>
            <br v-if="history.length > 0"/>
            <div class="d-flex">
                <span style="margin-right: 5px;">{{curDirName}}> </span>
                <input class="terminal-input flex-grow-1" v-model="line" @keyup.enter="processCommand" @keyup.tab="processAutoComplete" ref="cmdLine" />
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
                treeArray: []
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
            processCommand() {
                this.parsed = this.line.split(' ');
                if (this.parsed.length > 1) {
                    if (this.parsed[0] === 'cd') {
                        this.processChangeDirectory();
                    }
                    else if (this.parsed[0] === 'open') {
                        this.processOpenFile();
                    }
                    else {
                        this.history.push(`Unknown command '${this.parsed[0]}'`);
                    }
                }
                else if (this.parsed[0] === 'clear')
                    this.history = [];
                else if (this.parsed[0] === 'ls') {
                    this.processLS();
                }
                else {
                    this.history.push(`Unknown command '${this.parsed[0]}'`);
                }
                this.line = '';
                setTimeout(function() {
                    let element = document.getElementById('inner-terminal');
                    element.scrollTop = element.scrollHeight;
                }, 10)


            },
            processChangeDirectory() {
                let splitPath = this.curDirName.split('/');
                if (this.parsed[1] === '..' || this.parsed[1] === '../') {
                    if (this.curDirIndex <= 0) return;
                    this.curDirIndex = this.treeArray[this.curDirIndex].parent;
                    if (splitPath.length > 1) {
                        splitPath.pop();
                        this.curDirName = splitPath.join('/');
                    }
                    return;
                }
                let dirArray = this.treeArray[this.curDirIndex].directories;
                for (let i=0; i < dirArray.length; i++) {
                    if (this.treeArray[dirArray[i]].label === this.parsed[1] || this.treeArray[dirArray[i]].label+'/' === this.parsed[1]) {
                        this.curDirIndex = dirArray[i];
                        this.curDirName += '/' + this.treeArray[dirArray[i]].label;
                        return;
                    }
                }
                this.history.push(`Directory '${this.parsed[1]}' not found`);
            },
            processOpenFile() {
                let fileIndex = this.curDir.files.findIndex(obj => obj.fileName === this.parsed[1]);
                if (fileIndex !== -1) {
                    this.$router.push(this.curDir.files[fileIndex].to);
                }
                else {
                    this.history.push(`Cannot find file: '${this.parsed[1]}'`);
                }
            },
            processLS() {
                for (let i=0; i < this.curDir.directories.length; i++) {
                    this.history.push(`<span style="color: lightblue">${this.treeArray[this.curDir.directories[i]].label}/</span>`);
                }
                for (let i=0; i < this.curDir.files.length; i++) {
                    this.history.push(`<span style="color: blue">${this.curDir.files[i].fileName}</span>`);
                }
            },
            processAutoComplete(e) {
                // TODO: Add tab completion for paths going up directories
                e.preventDefault();
                this.parsed = this.line.split(' ');

                let directoryToSearch = this.curDir;

                let path = this.parsed[this.parsed.length-1].split('/');

                if (path[path.length-1] === '') return;
                if (path.length > 1 && path[1] !== '') {
                    let cur = this.curDirIndex;
                    for (let i=0; i < path.length-1; i++) {
                        cur = this.searchDirectories(path[i], this.treeArray[cur].directories);

                        if (!cur) return;
                    }
                    directoryToSearch = this.treeArray[cur];
                }

                let last = this.parsed.length-1;


                let dirSearch = this.searchDirectories(path[path.length-1], directoryToSearch.directories);
                if (dirSearch) {
                    path[path.length-1] = this.treeArray[dirSearch].label + '/';
                    this.parsed[last] = path.join('/');
                    //this.parsed[last] = this.treeArray[dirSearch].label + '/';
                    this.line = this.parsed.join(' ');
                    return;
                }


                let fileSearch = this.searchFiles(path[path.length-1], directoryToSearch.files);
                if (fileSearch) {
                    path[path.length-1] = fileSearch;
                    this.parsed[last] = path.join('/');
                    //this.parsed[last] = fileSearch;
                    this.line = this.parsed.join(' ');
                }

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
                    if (this.isOrderedSubstring(search, files[i].fileName)) {
                        return files[i].fileName;
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