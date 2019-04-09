<template>
    <div class="the-terminal">
        <div class="the-terminal-inner">
            <span v-for="entry in history">{{entry}}</span>
            <div class="d-flex">
                <span style="margin-right: 5px;">{{chrDir}}> </span>
                <input class="terminal-input flex-grow-1" v-model="line" @keyup.enter="processCommand" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TheTerminal",
        data() {
            return {
                line: '',
                chrDir: 'Root',
                history: [],
                validCommands: ['cd', 'open']
            }
        },
        methods: {
            processCommand() {
                let parsed = this.line.split(' ');
                if (!this.validCommands.includes(parsed[0])) {
                    this.history.push(`Unknown command '${parsed[0]}'`);
                }
                this.line = '';
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
        overflow: auto;
    }
</style>