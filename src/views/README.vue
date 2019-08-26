<template>
    <div class="p-2">
        <h1>Kenny's Portfolio</h1>
        <hr />
        <p>
            Hi, thanks for taking the time to look at my online portfolio! The page is based on a typical dark-themed IDE (mostly JetBrains products) and
            is meant to showcase my skills and experience as a Software Developer in a fun way!
        </p>

        <h2>Navigation</h2>
        <p>
            To navigate the website, use the file navigator on the left hand side (or under the dropdown tab if on mobile) to access the different pages.
        </p>

        <h2>Features</h2>
        <p>
            Feel free to explore the page, there are some interesting features I've included to make the showcase as interactive as possible:
        </p>
        <ul>
            <li>
                <h3>Command Line Interface</h3>
                <p>
                    You may have already noticed, but there is a button at the bottom of the screen for a terminal.
                    This is a functioning (but rather minimal) command line interface that allows you to navigate through my portfolio!
                </p>
                <p>
                    Currently, the terminal only supports 4 commands:
                </p>
                <ul>
                    <li>cd - like most CLIs, this changes the working directory to the specified directory</li>
                    <li>ls - lists out contents of current working directory</li>
                    <li>open - loads the specified page by the given filename</li>
                </ul>
            </li>
        </ul>




        <h2>Credits</h2>
        <p>
            This site was made using Vue.js with Bootstrap 4's grid system to help with responsive design.
        </p>
        <p>
            Thanks to <a href="https://www.instagram.com/mattmadesomestuff/">Matt Luonuansu</a> for making the awesome logos for this portfolio!
        </p>

    </div>
</template>

<script>
    import {READMEObj} from "../constants/PageObjects";

    export default {
        name: "README",
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.$store.commit('addTabToHistory', READMEObj);
            })
        }
    }
</script>

<style scoped>

</style>
