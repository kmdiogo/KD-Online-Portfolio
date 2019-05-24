<template>
    <div class="text-page skills">
        <!-- TODO: Update background image with higher res photo -->
        <img class="media-bg about-me-bg" src="../assets/media/ExperienceBg.jpg" />
        <div class="h-super1" style="color: forestgreen">Experience</div>
        <hr style="width: 100%;" />

        <Timeline
                style="width: 100%; max-width: 100%;"
                :timeline-items="dataTimeline"
                :unique-year="false"
                order="desc"
                color-dots="#2dafff"
        />

    </div>
</template>

<script>
    import {ExperienceObj} from "../constants/PageObjects";
    import Timeline from 'timeline-vuejs'

    export default {
        name: "Experience",
        components: {Timeline},
        data() {
            return {
                dataTimeline: [
                    {
                        from: new Date(2018, 2),
                        title: "<b>Software Developer</b><br /><i>Intellitech Corporation</i>",
                        description: "Developed Jail Management Systems and Public Safety Software for a variety of counties across the U.S." +
                            "<br /><br />Technologies: ASP.NET MVC, Vue.js, VBA, MicrosoftSQL, WPF"
                    },
                    {
                        from: new Date(2016, 0),
                        title: "<b>Computer Science Tutor</b><br /><i>YSU Center for Student Progress</i>",
                        description: "Teach core programming concepts in C++, Java, and Python. " +
                            "Topics include Problem Solving, Data Structures and Algorithms, Artificial Intelligence, and Object-Oriented Programming"
                    },
                    {
                        from: new Date(2016, 0),
                        title: "<b>Teacher</b><br /><i>Oak Hill Collaborative</i>",
                        description: "Use Raspberry Pis and Python programming with Minecraft" +
                            " to teach 4th - 6th grade children the basics of computer hardware, software, and programming."
                    },
                ]
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm=> {
                vm.$store.commit('addTabToHistory', ExperienceObj);
            })
        }
    }
</script>

<style scoped>
    .skills {
        display: flex;
        flex-direction: column;
    }

    .work-list {
        display: flex;
        flex-direction: column;
    }
</style>