<template>
    <div class="welcome">
        <video autoplay muted loop class="media-bg coding-bg">
            <source src="../assets/media/Coding.mp4" type="video/mp4">
        </video>

        <div class="h-super1">
            <vue-typer text="Hello!"
                       :pre-type-delay="500" :repeat="0">
            </vue-typer>
        </div>
        <div class="h-super2">
            <vue-typer text="Welcome to My Portfolio"
                       :pre-type-delay="2000" :repeat="0">
            </vue-typer>
        </div>

    </div>
</template>

<script>
    import {VueTyper} from 'vue-typer'
    export default {
        components: {
            VueTyper
        },
        name: "Welcome",
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.$store.commit('updateCurrentFileName', 'Welcome.html');
                vm.$store.commit('updateCurrentFileIcon', 'far fa-file-code');
                vm.$store.commit('updateCurrentFileColor', 'darkorange')
            })
        }
    }
</script>

<style scoped lang="scss">
    .welcome {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: rgb(220,220,200);
    }
    .coding-bg {
        opacity: 0.15;
    }
</style>
