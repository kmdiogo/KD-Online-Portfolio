<template>
    <!-- TODO: Fix sizing issues with images -->
    <div class="container-fluid about-me">
        <div class="row" style="height: 100%;">
            <div class="col-md-6">
                <div class="h-super1" style="color: forestgreen">About Me</div>
                <hr />
                <p>Hi, my name is Kenny Diogo!</p>
                <p>I am currently studying Computer Science at Youngstown State University</p>
                <p>I am an avid Coder with a passion for problem solving and creating awesome things.
                    I have a particular interest in Web Development and Machine Learning (I ideally love work that is an intersection of the two fields), but I really enjoy any kind of work
                    that demands critical thinking, problem solving, and creative solutions.
                </p>

                <p>
                    Some hobbies of mine include:
                </p>
                <ul>
                    <li>Playing video games (Screeps, Gears of War, Overwatch)</li>
                    <li>Volleyball (I play in my College Intramural Leagues and our Men's Club Team)</li>
                    <li>Playing piano</li>
                    <li>
                        Breakdancing
                        <span v-if="!isVideoVisible">(check <a class="clickable" @click="isVideoVisible=true">this</a> out)</span>
                        <span v-else>(<a class="clickable" @click="isVideoVisible=false">Close Video</a>)</span>
                    </li>
                </ul>
            </div>
            <div class="col-md-6 media-column">
                <div class="head-shot-wrapper">
                    <img class="head-shot" src="../assets/media/Head_Shot.jpg" />
                    <span style="text-align: center;">Me.jpg</span>
                </div>

                <transition name="fade">
                    <div v-if="isVideoVisible" class="breakdance-video-wrapper">
                        <video autoplay muted loop class="breakdance-video">
                            <source src="../assets/media/Breakdancing.mp4" type="video/mp4">
                        </video>
                        <span>Breakdance.mp4</span>
                    </div>
                </transition>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "AboutMe",
        data() {
            return {
                isVideoVisible: false,
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm=>{
                vm.$store.commit('updateCurrentFileName', 'AboutMe.html');
                vm.$store.commit('updateCurrentFileIcon', 'far fa-file-code');
                vm.$store.commit('updateCurrentFileColor', 'darkorange');
            })
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/styles/variables.scss';
    .about-me {
        color: $text-color-primary;
    }
    .head-shot {
        width: 50%;
        border-radius: 25%;
    }
    .head-shot-wrapper {
        height: 50%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .media-column {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .breakdance-video {
        width: 50%;
        -webkit-border-radius: 25%;
        -moz-border-radius: 25%;
        border-radius: 25%;
    }
    .breakdance-video-wrapper {
        height: 50%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
