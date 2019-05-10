<template>
    <div class="the-terminal">
        <div class="the-terminal-inner" id="inner-terminal" v-on:keydown.tab="processAutocomplete">
            <span v-for="entry in history" v-html="entry"></span>
            <br v-if="history.length > 0"/>
            <div class="d-flex">
                <span style="margin-right: 5px;">{{treeArray[curDirIndex].label}}> </span>
                <input class="terminal-input flex-grow-1" v-model="line" @keyup.enter="processCommand" @keyup.tab="processAutocomplete" />
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
                history: [],
                parsed: [],
                treeArray: []
            }
        },
        created() {
            convertTreeToArray(tree, null, this.treeArray);
        },
        computed: {
            /*curDir() {
                let obj = {
                    directories: [],
                    files: []
                };
                for (let i=0; i < this.treeArray[this.curDirIndex].directories.length; i++) {
                    let nextDirIndex = this.treeArray[this.curDirIndex].directories[i];
                    obj.directories.push(this.treeArray[nextDirIndex].label);
                }

                for (let i=0; i < this.treeArray[this.curDirIndex].files.length; i++) {
                    //obj.files.push(this.treeArray[this.curDirIndex].files[i].label);
                    obj.files.push(i);
                }
                return obj;
            },*/
            curDir() {
                return this.treeArray[this.curDirIndex];
            }
        },
        methods: {
            processCommand() {
                this.parsed = this.line.split(' ');
                if (this.parsed.length > 1) {
                    if (this.parsed[0] === 'cd') {
                        this.processChangeDirectory();
                    }
                    else if (this.parsed[0] === 'open') {
                        let fileExists = false;
                        for(let i=0; i < this.curDir.files.length; i++) {
                            if (this.parsed[1] === this.curDir.files[i].fileName) {
                                this.$router.push(this.curDir.files[i].to);
                                fileExists = true;
                            }
                        }
                        if (!fileExists) {
                            this.history.push(`Cannot find file: '${this.parsed[1]}'`);
                        }
                    }
                    else {
                        this.history.push(`Unknown command '${this.parsed[0]}'`);
                    }
                }
                else if (this.parsed[0] === 'clear')
                    this.history = [];
                else if (this.parsed[0] === 'ls') {
                    for (let i=0; i < this.curDir.directories.length; i++) {
                        this.history.push(`<span style="color: lightblue">${this.treeArray[this.curDir.directories[i]].label}/</span>`);
                    }
                    for (let i=0; i < this.curDir.files.length; i++) {
                        this.history.push(`<span style="color: blue">${this.curDir.files[i].fileName}</span>`);
                    }
                }
                this.line = '';
            },
            processChangeDirectory() {
                if (this.parsed[1] === '..' || this.parsed[1] === '../') {
                    this.curDirIndex = this.curDirIndex === 0 ? 0 : this.treeArray[this.curDirIndex].parent;
                    return;
                }
                let dirArray = this.treeArray[this.curDirIndex].directories;
                for (let i=0; i < dirArray.length; i++) {
                    if (this.treeArray[dirArray[i]].label === this.parsed[1] || this.treeArray[dirArray[i]].label+'/' === this.parsed[1]) {
                        this.curDirIndex = dirArray[i];
                        return;
                    }
                }
                this.history.push(`Directory '${this.parsed[1]}' not found`);
            },
            processAutocomplete(e) {
                e.preventDefault();
                this.parsed = this.line.split(' ');
                let last = this.parsed.length-1;

                // Search through current directory entries
                for (let i=0; i < this.curDir.directories.length; i++) {
                    let nextDir = this.treeArray[this.curDir.directories[i]];
                    let isMatch = true;
                    for (let j=0; j < this.parsed[last].length;j++) {
                        if (nextDir.label[j] && nextDir.label[j].toUpperCase() !== this.parsed[last][j].toUpperCase()) {
                            isMatch = false;
                        }
                    }
                    if (isMatch) {
                        this.parsed[last] = nextDir.label + '/';
                        this.line = this.parsed.join(' ');
                        return;
                    }
                }

                // Search through files
                for (let i=0; i < this.curDir.files.length; i++) {
                    let isMatch = true;
                    for (let j=0; j < this.parsed[last].length;j++) {
                        if (this.curDir.files[i].fileName[j] && this.curDir.files[i].fileName[j].toUpperCase() !== this.parsed[last][j].toUpperCase()) {
                            isMatch = false;
                        }
                    }
                    if (isMatch) {
                        this.parsed[last] = this.curDir.files[i].fileName;
                        this.line = this.parsed.join(' ');
                        return;
                    }
                }
            },
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