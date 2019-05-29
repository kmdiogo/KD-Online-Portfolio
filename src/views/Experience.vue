<template>
    <div class="text-page skills">
        <!-- TODO: Update background image with higher res photo -->
        <img class="media-bg about-me-bg" src="../assets/media/ExperienceBg.jpg" />
        <div class="h-super1" style="color: forestgreen">Work Experience</div>
        <hr style="width: 100%;" />


        <WorkItem year="2018" month="February" job-title="Software Developer" company="Intellitech Corporation">
            <p>Developed Jail Management Systems and Public Safety Software for a variety of counties across the U.S.</p>
            <p>Technologies: ASP.NET MVC, Vue.js, VBA, MicrosoftSQL, WPF</p>
        </WorkItem>

        <hr style="width: 100%;" />

        <WorkItem year="2016" month="January" job-title="Computer Science Tutor" company="YSU Center for Student Progress">
            <p>
                Teach core programming concepts in C++, Java, and Python.
                Topics include Problem Solving, Data Structures and Algorithms, Artificial Intelligence, and Object-Oriented Programming
            </p>
        </WorkItem>

        <hr style="width: 100%;" />

        <WorkItem year="2016" month="January" job-title="Teacher" company="Oak Hill Collaborative">
            <p>
                Use Raspberry Pis and Python programming with Minecraft to teach 4th - 6th grade
                children the basics of computer hardware, software, and programming.
            </p>
        </WorkItem>



    </div>
</template>

<script>
    import {ExperienceObj} from "../constants/PageObjects";
    import WorkItem from "../components/Experience/WorkItem";

    export default {
        name: "Experience",
        components: {WorkItem,},
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