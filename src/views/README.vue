<template>
    <div class="p-2">
        <p>
            Hi, thanks for taking the time to look at my online portfolio! The page design is based on an IDE (mostly JetBrains products) and
            is meant to showcase my skills and experience as a Software Developer in a fun way!
        </p>

        <p>
            To navigate the website, use the navigator on the left hand side (or under the 'Files' tab if on mobile) to access the different pages.
            Feel free to explore the page, there are some interesting features
            I've included to make the showcase as interactive as possible.
        </p>

        <p>
            For example, you may have already noticed, but there is a button at the bottom of the screen for a terminal.
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

        <p>
            This site was made using Vue.js with Bootstrap 4's grid system to help with responsive design.
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