<template>
    <div class="d-flex flex-column">
        <div class="d-flex toolbar-actions">
            <div class="dropdown">
                <span>File</span>
                <div class="dropdown-content">
                    <a class="dropdown-item" href="/test.txt" download>Download Resume</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TheToolbar",
        methods: {
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/styles/variables";
    .toolbar-actions > div {
        padding: 5px;
    }

    .dropdown {
        position: relative;
        display: inline-block;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: $exterior-bg;
        min-width: 180px;
        box-shadow: 0px 8px 16px 0px $highlight-blue;
        padding: 5px;
        z-index: 1;
    }

    .dropdown:hover {
        outline: none;
    }

    .dropdown:hover > span {
        border: 1px solid gray;
        background-color: rgb(75, 110, 175);
    }

    .dropdown:hover .dropdown-content {
        display: flex;
        flex-direction: column;
        border: 1px solid gray;
    }
</style>