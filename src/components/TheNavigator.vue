<template>
    <div class="the-navigator">
        <div style="color: rgb(220,220,220)">
            <span>Kenny's Portfolio</span>
            <hr />
        </div>

        <!--<Folder folder-name="Root" :is-initially-open="true">
            <Folder folder-name="Projects"></Folder>
            <Folder folder-name="Experience"></Folder>

            <File :file-name="AboutMeObj.fileName" :to="AboutMeObj.to" :icon="AboutMeObj.icon" :icon-color="AboutMeObj.iconColor"></File>
            <File :file-name="SkillsObj.fileName" :to="SkillsObj.to" :icon="SkillsObj.icon" :icon-color="SkillsObj.iconColor"></File>
            <File :file-name="CommandsObj.fileName" :to="CommandsObj.to" :icon="CommandsObj.icon" :icon-color="CommandsObj.iconColor"></File>
            <Folder folder-name="Projects" :is-initially-open="false">

            </Folder>
        </Folder>-->

        <Folder :folder-name="tree.label" :directories="tree.directories" :files="tree.files" :is-initially-open="true"></Folder>




    </div>
</template>

<script>
    import Folder from "./shared/Folder";
    import File from "./shared/File";
    import {tree} from "../constants/FileTree";
    import {WelcomeObj, AboutMeObj, SkillsObj, CommandsObj} from "@/constants/PageObjects";

    export default {
        name: "TheNavigator",
        data() {
            return {
                WelcomeObj: WelcomeObj,
                AboutMeObj: AboutMeObj,
                SkillsObj: SkillsObj,
                CommandsObj: CommandsObj,
                tree: tree
            }
        },
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
