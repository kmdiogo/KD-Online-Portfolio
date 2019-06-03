<template>
    <div class="text-page">
        <div class="d-flex">
            <h1 style="color: forestgreen; margin: 0;">Genetic Flappy Bird</h1>
            <!-- TODO: Create Github Repo and upload code -->
            <a class="hover-jump" href="https://github.com/kmdiogo/Genetic-Learning-Flappy-Bird" style="margin-left: auto;">
                <i class="fab fa-github fa-2x"></i>
            </a>
        </div>

        <h2>Training a model to play Flappy Bird through the power of genetic learning</h2>
        <h3 class="m-0">Technologies: Unity, C#</h3>
        <hr style="width: 100%;" />

        <div class="iframe-container">
            <iframe src="https://kmdiogo.github.io/Genetic-Learning-Flappy-Bird/"></iframe>
        </div>

        <h4>
            This was done as a final project for my AI in Game Design class. I got the original idea
            for this project from <a href="https://www.youtube.com/watch?v=aeWmdojEJf0">Srdjan Susnic</a>.
            The project was implemented in Unity using C#. Below is the presentation video for it made primarily for entertainment purposes.
        </h4>

        <div class="w-100 d-flex flex-column align-items-center">
            <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/qEXliTFBhHs" frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
            </iframe>
        </div>



    </div>
</template>

<script>
    import {GeneticFBObj} from "../../constants/PageObjects";

    export default {
        name: "GeneticFB",
        data() {
            return {

            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm=> {
                vm.$store.commit('addTabToHistory', GeneticFBObj);
            })
        }
    }
</script>

<style scoped>

</style>