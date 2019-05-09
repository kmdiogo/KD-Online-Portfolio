<template>
    <div class="the-terminal">
        <div class="the-terminal-inner" id="inner-terminal">
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
            curDir() {
                let obj = {
                    directories: [],
                    files: []
                };
                for (let i=0; i < this.treeArray[this.curDirIndex].directories.length; i++) {
                    let nextDirIndex = this.treeArray[this.curDirIndex].directories[i];
                    obj.directories.push(this.treeArray[nextDirIndex].label);
                }

                for (let i=0; i < this.treeArray[this.curDirIndex].files.length; i++) {
                    obj.files.push(this.treeArray[this.curDirIndex].files[i].label);
                }
                return obj;
            }
        },
        methods: {
            processCommand() {
                this.parsed = this.line.split(' ');
                if (this.parsed[0] === 'clear')
                    this.history = [];
                else if (this.parsed[0] === 'cd') {
                    this.processChangeDirectory();
                }
                else if (this.parsed[0] === 'ls') {
                    for (let i=0; i < this.curDir.directories.length; i++) {
                        this.history.push(`<span style="color: lightblue">${this.curDir.directories[i]}/</span>`);
                    }
                    for (let i=0; i < this.curDir.files.length; i++) {
                        this.history.push(`<span style="color: blue">${this.curDir.files[i]}</span>`);
                    }
                }
                else {
                    this.history.push(`Unknown command '${this.parsed[0]}'`);
                }
                this.line = '';
                let objDiv = document.getElementById("inner-terminal");
                objDiv.scrollTop = objDiv.scrollHeight;

            },
            processChangeDirectory() {
                if (this.parsed[1] === '..' || this.parsed[1] === '../') {
                    this.curDirIndex = this.curDirIndex === 0 ? 0 : this.treeArray[this.curDirIndex].parent;
                    return;
                }
                let dirArray = this.treeArray[this.curDirIndex].directories;
                for (let i=0; i < dirArray.length; i++) {
                    if (this.treeArray[dirArray[i]].label === this.parsed[1]) {
                        this.curDirIndex = dirArray[i];
                        return
                    }
                }
                this.history.push(`Directory '${this.parsed[1]}' not found`);
            },
            processAutocomplete() {

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