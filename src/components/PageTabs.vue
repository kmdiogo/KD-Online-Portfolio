<template>
    <div class="page-tabs">
        <File class="page-tab-file-wrapper" :file-name="$store.state.currentFileName" :icon="$store.state.currentFileIcon" :icon-color="$store.state.currentFileColor"></File>
    </div>
</template>

<script>
    import File from "./shared/File";
    export default {
        name: "PageTabs",
        components: {File}
    }
</script>

<style scoped lang="scss">
    @import "../assets/styles/variables";
    .page-tabs {
        height: 35px;
        display: flex;
        align-items: center;
        border-bottom: $bar-border;
        background-color: $exterior-bg;
    }
    .page-tab-file-wrapper {
        border: 1px solid gray;
    }
</style>
