<template>
    <div class="folder">
        <div class="folder-line">
            <div class="chevrons" style="margin-right: 5px; width: 1rem" @click="isExpanded = !isExpanded">
                <i class="fas fa-chevron-down" style="width: 1rem;" v-if="isExpanded && $slots.default"></i>
                <i class="fas fa-chevron-right" style="width: 1rem;" v-else-if="$slots.default"></i>
            </div>
            <i class="fas fa-folder" style="color: slategray"></i>
            <span class="folder-text" style="margin-left: 5px;">{{folderName}}</span>
        </div>

        <div class="sub-folder" v-if="isExpanded">
            <slot></slot>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Folder",
        props: {
            folderName: {
                type: String,
                required: true
            },
            isInitiallyOpen: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                isExpanded: this.isInitiallyOpen
            }
        },
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
    .chevrons:hover {
        color: white;
    }
</style>
