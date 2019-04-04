<template>
    <div class="file">
        <div class="file-icon">
            <i :class="icon" :style="{color: iconColor}"></i>
        </div>
        <router-link class="router-link" tag="span" :to="to">{{fileName}}</router-link>
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
                type: String,
                default: ''
            }
        },
    }
</script>

<style scoped lang="scss">
    .file {
        color: rgb(220,220,220);
        margin-left: 20px;
        display: flex;
    }
    .file-icon {
        width: 1rem;
    }
</style>
