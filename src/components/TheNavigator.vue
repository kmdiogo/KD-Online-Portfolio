<template>
    <div class="the-navigator">
        <div style="color: rgb(220,220,220)">
            <span>Kenny's Portfolio</span>
            <hr />
        </div>

        <Folder folder-name="Root" :is-initially-open="true">
            <Folder folder-name="Subdir">
                <Folder folder-name="AnotherSubDir">
                    <Folder folder-name="AndAnotherOne">
                    </Folder>
                </Folder>
                <File file-name="Test.txt" to="/Test" icon="far fa-file-alt"></File>
            </Folder>
        </Folder>

        <Folder folder-name="Booking"></Folder>

        <File file-name="Welcome.html" to="/" icon="far fa-file-code" icon-color="darkorange"></File>
    </div>
</template>

<script>
    import Folder from "./shared/Folder";
    import File from "./shared/File";
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
