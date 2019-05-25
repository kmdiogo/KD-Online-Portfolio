<template>
    <div class="text-page d-flex flex-column">
        <h1 style="color: forestgreen; margin: 0;">Lexical Analyzer Generator</h1>

        <div class="d-flex">
            <h2>Powered by: </h2>
            <img src="../assets/media/emscripten_logo.png" id="emscripten-logo" />
        </div>
        <hr style="width: 100%;" />

        <h4>
            Welcome to my Lexical Analyzer Generator! The original program is written in C++.
            This is a slightly modified version that is compiled using <a href="https://emscripten.org/index.html">Emscripten</a>
            and is ran in your browser with <a href="https://webassembly.org/">WebAssembly!</a>
        </h4>

        <h3 class="m-0">What it does: </h3>
        <p class="m-0">
            Given a list of tokens, this program will generate a C++ Lexical Analyzer class.
        </p>

        <br />

        <h3 class="m-0">Instructions: </h3>
        <p class="m-0">
            Use the input box below to define the tokens you want the Analyzer to recognize.
            The tokens are defined using regular expressions. Character sets are supported.
            You can also define ignore sequences which the Analyzer will recognize but not return anything. A template is already provided
            to show how to define standard C++ identifier tokens.
        </p>

        <p>
            Once your tokens are defined, click the run button. Two download links will appear below the input box.
            One is a header file and the other is a cpp file for the Lexical Analyzer class.
        </p>

        <h3>Input: </h3>
        <div>
            <textarea id="input" v-model="inputText" rows="12"></textarea>
        </div>
        <button @click="runLAG">Run</button>

        <h3>Output: </h3>
        <div>
            <textarea id="output" disabled rows="12"></textarea>
        </div>

        <a :href="headerFile" download="LexicalAnalyzer.h" v-if="headerFile">Download Header File</a>
        <a :href="bodyFile" download="LexicalAnalyzer.cpp" v-if="headerFile">Download Body File</a>
    </div>
</template>

<script>
    import {LAGObj} from "../constants/PageObjects";

    export default {
        name: "LAG",
        data() {
            return {
                inputText: 'class alpha [a-zA-Z_]\n' +
                    'class digit [0-9]\n' +
                    'class ws [\\n\\t\\f\\v\\r\\ ]\n' +
                    '\n' +
                    'token Ident /[alpha]([alpha]|[digit])* /\n' +
                    '\n' +
                    'ignore /[ws]+/\n',
                headerFile: null,
                bodyFile: null,
                wasmScriptName: 'LAG.js'
            }
        },
        methods: {
            // stringToBytes source code from Google's Closure Library
            stringToBytes(str) {
                // TODO(user): Use native implementations if/when available
                var out = [], p = 0;
                for (var i = 0; i < str.length; i++) {
                    var c = str.charCodeAt(i);
                    if (c < 128) {
                        out[p++] = c;
                    } else if (c < 2048) {
                        out[p++] = (c >> 6) | 192;
                        out[p++] = (c & 63) | 128;
                    } else if (
                        ((c & 0xFC00) == 0xD800) && (i + 1) < str.length &&
                        ((str.charCodeAt(i + 1) & 0xFC00) == 0xDC00)) {
                        // Surrogate Pair
                        c = 0x10000 + ((c & 0x03FF) << 10) + (str.charCodeAt(++i) & 0x03FF);
                        out[p++] = (c >> 18) | 240;
                        out[p++] = ((c >> 12) & 63) | 128;
                        out[p++] = ((c >> 6) & 63) | 128;
                        out[p++] = (c & 63) | 128;
                    } else {
                        out[p++] = (c >> 12) | 224;
                        out[p++] = ((c >> 6) & 63) | 128;
                        out[p++] = (c & 63) | 128;
                    }
                }
                return out;
            },
            runLAG() {
                // Write user input to input.txt virtual file
                let outputText = document.getElementById('output');
                outputText.innerHTML = '';
                let data = this.stringToBytes(this.inputText);
                //Module['FS_createDataFile']('/', 'input.txt', data, true, true, true);
                let stream = FS.open('input.txt', 'w');
                FS.write(stream, data, 0, data.length, 0);
                FS.close(stream);

                // Call C++ function
                Module.ccall('generateFiles', null);

                // Read in generated virtual files
                let headerFileText = FS.readFile('LexicalAnalyzer.h', {
                    encoding: 'utf8',
                    flags: 'r'
                });
                let bodyFileText = FS.readFile('LexicalAnalyzer.cpp', {
                    encoding: 'utf8',
                    flags: 'r'
                });

                // Write text to a blob for file download
                let headerFileBlobData = new Blob([headerFileText], {type: 'text/plain'});
                let bodyFileBlobData = new Blob([bodyFileText], {type: 'text/plain'});

                // If replacing a previously generated file,
                // manually revoke the object URL to avoid memory leaks.
                if (this.headerFile !== null) {
                    window.URL.revokeObjectURL(this.headerFile);
                }
                if (this.bodyFile !== null) {
                    window.URL.revokeObjectURL(this.bodyFile);
                }

                this.headerFile = window.URL.createObjectURL(headerFileBlobData);
                this.bodyFile = window.URL.createObjectURL(bodyFileBlobData);
            }
        },
        mounted() {
            // Load script that hooks WASM program output to HTML
            let lagScript = document.createElement('script');
            lagScript.setAttribute('src', 'wasm_output.js');
            lagScript.id = 'lag-script';
            document.head.appendChild(lagScript);
            console.log("LAG Script Loaded.");

            // Load LAG WASM Script
            let wasmOutputScript = document.createElement('script');
            wasmOutputScript.setAttribute('src', this.wasmScriptName);
            wasmOutputScript.id = 'wasm-output-script';
            document.head.appendChild(wasmOutputScript);
            console.log("Emscripten Output Script Loaded.");
        },
        beforeRouteEnter(to, from, next) {
            next(vm=> {
                vm.$store.commit('addTabToHistory', LAGObj);
            })
        },
        beforeRouteLeave(to, from, next) {
            // Remove loaded scripts
            let elem = document.getElementById('lag-script');
            elem.parentNode.removeChild(elem);

            elem = document.getElementById('wasm-output-script');
            elem.parentNode.removeChild(elem);
            next();
        },
    }
</script>

<style scoped lang="scss">
    #output {
        width: 100%;
        background-color: black;
        color: white;
        font-family: 'Lucida Console', Monaco, monospace;
        outline: none;
        border: 1px solid gray;
    }

    #input {
        width: 100%;
        //height: auto;
    }

    #emscripten-logo {
        width: 200px;
        height: 60px;
    }

</style>