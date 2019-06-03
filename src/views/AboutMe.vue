<template>
    <!-- TODO: Fix sizing issues with images -->
    <div class="about-me text-page">
        <img class="media-bg" src="../assets/media/AboutMeBg.jpg" />
        <div class="row" style="height: 100%;">
            <div class="col-md-12">
                <div class="h-super1" style="color: forestgreen;">About Me</div>
                <hr />
                <h1>Kenny Diogo</h1>
                <h2>An avid coder with a passion for solving problems computationally</h2>
                <p>I am currently studying Computer Science with a minor in Mathematics at Youngstown State University.</p>
                <p>
                    Ever since beginning my studies, I have developed an extreme passion for Computer Science and programming.
                    I am always eager to learn new skills/technologies and have worked on
                    topics (either in professional, academic, or personal environments) that include:
                </p>
                <ul>
                    <li>Web Applications/Services</li>
                    <li>Mathematical Modeling and Computational Proofs</li>
                    <li>Neural Networks</li>
                    <li>Compilers (Lexical Analyzer Generator)</li>
                    <li>Game Development</li>
                    <li>Databases</li>
                    <li>File System Drivers (EXT2)</li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
    import {AboutMeObj} from "../constants/PageObjects";

    export default {
        name: "AboutMe",
        data() {
            return {
                isVideoVisible: false,
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.$store.commit('addTabToHistory', AboutMeObj);
            })
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/styles/variables.scss';
    .head-shot {
        min-height: 0;
        width: 300px;
    }
    .head-shot-wrapper {
        height: 300px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
        margin-top: 20px;
    }
    .media-column {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .breakdance-video {
        width: 300px;
    }
    .breakdance-video-wrapper {
        height: 300px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
