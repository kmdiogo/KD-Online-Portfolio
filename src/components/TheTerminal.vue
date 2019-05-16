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
            },
            processChangeDirectory() {
                let splitPath = this.curDirName.split('/');
                if (this.curDirIndex > 0 && this.parsed[1] === '..' || this.parsed[1] === '../') {
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
                e.preventDefault();
                this.parsed = this.line.split(' ');
                let last = this.parsed.length-1;

                // Search through current directory entries
                for (let i=0; i < this.curDir.directories.length; i++) {
                    let nextDir = this.treeArray[this.curDir.directories[i]];
                    if (this.isOrderedSubstring(this.parsed[last], nextDir.label)) {
                        this.parsed[last] = nextDir.label + '/';
                        this.line = this.parsed.join(' ');
                        return;
                    }
                }

                // Search through files
                for (let i=0; i < this.curDir.files.length; i++) {
                    if (this.isOrderedSubstring(this.parsed[last], this.curDir.files[i].fileName)) {
                        this.parsed[last] = this.curDir.files[i].fileName;
                        this.line = this.parsed.join(' ');
                    }
                }

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