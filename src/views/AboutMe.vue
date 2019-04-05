<template>
    <!-- TODO: Fix sizing issues with images -->
    <div class="about-me text-page">
        <img class="media-bg about-me-bg" src="../assets/media/AboutMeBg.jpg" />
        <div class="row" style="height: 100%;">
            <div class="col-md-6">
                <div class="h-super1" style="color: forestgreen;">About Me</div>
                <hr />
                <p>Hi, my name is Kenny Diogo!</p>
                <p>I am currently studying Computer Science at Youngstown State University.</p>
                <p>I am an avid Coder with a passion for problem solving and creating awesome things.
                    I have a particular interest in Web Development and Machine Learning (I ideally love work that intersects with the two fields), but I really enjoy any kind of work
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
                <p>Favorite Music Artists:</p>
                <ul>
                    <li>A Tribe Called Quest</li>
                    <li>The Beatles</li>
                    <li>Logic</li>
                    <li>Joyner Lucas</li>
                </ul>
            </div>
            <div class="col-md-6 media-column">
                <div class="h-super1" style="text-align: left; width: 100%; color: darkslateblue">Media</div>
                <hr style="width: 100%;" />

                <div class="head-shot-wrapper">
                    <img class="head-shot" src="../assets/media/Head_Shot.jpg" />
                    <span style="text-align: center;">Me.jpg</span>
                </div>

                <transition name="fade">
                    <div v-if="isVideoVisible" class="breakdance-video-wrapper">
                        <video autoplay muted loop class="breakdance-video">
                            <source src="../assets/media/Breakdancing.mp4" type="video/mp4">
                        </video>
                        <span>:)</span>
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
                /*vm.$store.commit('updateCurrentFileName', 'AboutMe.html');
                vm.$store.commit('updateCurrentFileIcon', 'far fa-file-code');
                vm.$store.commit('updateCurrentFileColor', 'darkorange');*/

                vm.$store.commit('addTabToHistory', {
                    name: 'AboutMe',
                    fileName: 'AboutMe.html',
                    icon: 'far fa-file-code',
                    iconColor: 'darkorange',
                    to: '/AboutMe'
                });


            })
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/styles/variables.scss';
    .about-me-bg {
        opacity: 0.15
    }
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
