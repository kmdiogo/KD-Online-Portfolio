<template>
    <div class="the-navigator">
        <div style="color: rgb(220,220,220)">
            <span><i class="fas fa-box-open" style="color: #ad8762"></i> Kenny's Portfolio</span>
            <hr />
        </div>

        <Folder :folder-name="tree.label" :directories="tree.directories" :file-routes="tree.files" :is-initially-open="true"></Folder>
    </div>
</template>

<script>
    import Folder from "./shared/Folder";
    import {tree} from "../constants/FileTree";

    export default {
        name: "TheNavigator",
        data() {
            return {
                tree
            }
        },
        components: {Folder},
    }
</script>

<style scoped>
    .the-navigator {
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 5px;
    }
</style>
