<template>
    <div class="the-navigator">
        <div style="color: rgb(220,220,220)">
            <span>Kenny's Portfolio</span>
            <hr />
        </div>

        <Folder folder-name="Root" :is-initially-open="true">
            <Folder folder-name="Projects"></Folder>
            <Folder folder-name="Experience"></Folder>
            <File file-name="Welcome.html" to="/" icon="fas fa-file-code" icon-color="darkorange"></File>
            <File file-name="AboutMe.html" to="/AboutMe" icon="fas fa-file-code" icon-color="darkorange"></File>
            <File file-name="Skills.html" to="/Skills" icon="fas fa-file-code" icon-color="darkorange"></File>
            <File file-name="Commands.txt" to="/Commands" icon="far fa-file-alt"></File>
        </Folder>


    </div>
</template>

<script>
    import Folder from "./shared/Folder";
    import File from "./shared/File";
    import {WelcomeObj, AboutMeObj, SkillsObj, CommandsObj} from "@/constants/PageObjects";

    export default {
        name: "TheNavigator",
        components: {File, Folder},
    }
</script>

<style scoped>
    .the-navigator {
        display: flex;
        flex-direction: column;
        padding: 5px;
    }
</style>
