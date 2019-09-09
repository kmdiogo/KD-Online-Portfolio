<template>
    <div class="welcome position-relative">
        <video autoplay muted loop class="media-bg coding-bg" style="width: 100%; height: 100%;">
            <source src="../assets/media/Coding.mp4" type="video/mp4">
        </video>

        <img src="../assets/media/logos/kenny-dilogo-transparent.png" style="width: 35%;" />
        <div class="welcome-text-1" style="text-align: center;">
            <vue-typer text="Kenny Diogo"
                       :pre-type-delay="500" :repeat="0">
            </vue-typer>
        </div>
        <div class="welcome-text-2" style="text-align: center;">
            <vue-typer text="Software Developer"
                       :pre-type-delay="2000" :repeat="0">
            </vue-typer>
        </div>
        <button @click="onTourClick" style="position: absolute; bottom: 5px; right: 5px;" class="d-none d-md-block">Tour <i class="fas fa-bus-alt"></i></button>

    </div>
</template>

<script>
    import {VueTyper} from 'vue-typer'
    import {WelcomeObj} from "../constants/PageObjects";
    import introJs from 'intro.js/intro';

    export default {
        components: {
            VueTyper
        },
        name: "Welcome",
        methods: {
            onTourClick() {
                introJs().start();
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.$store.commit('addTabToHistory', WelcomeObj);
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
    .welcome-text-1 {
        font-size: 7vw;
    }
    .welcome-text-2 {
        font-size: 5vw;
    }
    .coding-bg {
        opacity: 0.15;
    }
</style>
