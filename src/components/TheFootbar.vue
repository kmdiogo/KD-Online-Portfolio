<template>
    <div class="the-footbar text-page">
        <span class="footbar-item" @click="$store.commit('toggleIsTerminalOpen')">
            <i class="fas fa-terminal terminal-icon"></i>
            Terminal
        </span>
    </div>
</template>

<script>
    export default {
        name: "TheFootbar"
    }
</script>

<style scoped lang="scss">
    @import '../assets/styles/variables';
    .the-footbar {
        //padding: 10px;
        display: flex;
        align-items: center;
    }
    .footbar-item {
        padding: 7px;
    }
    .footbar-item:hover {
        cursor: pointer;
        background-color: rgba($interior-bg, 0.2);
    }
</style>