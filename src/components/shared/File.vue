<template>
    <div class="file" :class="{tab: isTab}">
        <div class="file-icon">
            <i :class="icon" :style="{color: iconColor}"></i>
        </div>
        <router-link class="router-link" :to="to" style="margin-left: 1px;">{{fileName}}</router-link>
        <div v-if="isTab" style="margin-left: 5px;">
            <i class="far fa-window-close close-icon" @click="$store.commit('removeTabFromHistory', fileName)"></i>
        </div>

    </div>
</template>

<script>
    export default {
        name: "File",
        props: {
            fileName: {
                type: String,
                required: true
            },
            iconColor: {
                type: String,
            },
            icon: {
                type: String
            },
            to: {
                type: [String, Object],
                //default: ''
            },
            isTab: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped lang="scss">
    .file {
        color: rgb(220,220,220);
        margin-left: 20px;
        display: flex;
        align-items: center;
    }
    .file-icon {
        width: 1rem;
    }
    .tab {
        border: 1px solid gray;
    }
    .close-icon:hover {
        color: gray;
    }
</style>
