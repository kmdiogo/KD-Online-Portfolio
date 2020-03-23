<template>
    <div class="page-tabs">
        <!--<File class="page-tab-file-wrapper" :file-label="$store.state.currentFileName" :icon="$store.state.currentFileIcon" :icon-color="$store.state.currentFileColor"></File>-->
        <File v-for="(tab, key) in $store.state.pageTabHistory"
              :file-name="tab.meta.label" :icon="tab.meta.icon"
              :icon-color="tab.meta.iconColor" :to="{ name: tab.name }"
              is-tab :key="key"></File>
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
        overflow: auto;
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
