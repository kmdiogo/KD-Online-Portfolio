<template>
    <div class="folder">
        <div class="folder-line">
            <div class="chevrons" style="margin-right: 5px; width: 1rem" @click="isExpanded = !isExpanded">
                <i class="fas fa-chevron-down" style="width: 1rem" v-if="isExpanded && !isEmpty"></i>
                <i class="fas fa-chevron-right" style="width: 1rem" v-else-if="!isEmpty"></i>
            </div>
            <i class="fas fa-folder" style="color: slategray"></i>
            <span class="folder-text" style="margin-left: 5px;">{{folderName}}</span>
        </div>

        <div class="sub-folder" v-if="isExpanded">
            <Folder v-for="dir in directories" :directories="dir.directories" :folder-name="dir.label"
                    :file-routes="dir.files" :key="dir.label"
                    :data-intro="dir.introJs ? dir.introJs : false"></Folder>
            <File v-for="route in fileRoutes" :file-name="route.meta.label" :to="{ name: route.name }"
                  :icon="route.meta.icon" :icon-color="route.meta.iconColor" :key="route.name"
                  :data-intro="route.meta.introJs ? route.meta.introJs : false"></File>
            <slot></slot>
        </div>
    </div>

</template>

<script>
    import File from "./File";
    export default {
        name: "Folder",
        components: {File},
        props: {
            folderName: {
                type: String,
                required: true
            },
            isInitiallyOpen: {
                type: Boolean,
                default: false
            },
            fileRoutes: {
                type: Array,
                default: () => {return []}
            },
            directories: {
                type: Array,
                default: () => {return []}
            }
        },
        data() {
            return {
                isExpanded: this.isInitiallyOpen
            }
        },
        computed: {
            isEmpty() {
                return (this.fileRoutes.length === 0 && this.directories.length === 0);
            },
        }
    }
</script>

<style scoped>
    .folder {
        display: flex; flex-direction: column;
    }
    .sub-folder {
        margin-left: 15px;
        display: flex;
        flex-direction: column;
    }
    .folder-line {
        display: flex;
    }
    .folder-text {
        color: rgb(220,220,220);
    }
    .chevrons {
        color: black;
    }
    .chevrons:hover {
        color: white;
    }
</style>
