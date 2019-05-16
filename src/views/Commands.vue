<template>
    <div class="container">
        <p>cd</p>
        <p>ls</p>
        <p>open</p>
    </div>
</template>

<script>
    import {CommandsObj} from "../constants/PageObjects";

    export default {
        name: "Commands",
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.$store.commit('addTabToHistory', CommandsObj);
            })
        }
    }
</script>

<style scoped>

</style>