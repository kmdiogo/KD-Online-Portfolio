<template>
    <div class="text-page skills">
        <img class="media-bg about-me-bg" src="../assets/media/SkillsBg.jpg" />
        <div class="h-super1" style="color: forestgreen">Skills</div>
        <hr style="width: 100%;" />

        <p>
            I primarily specialize in Full-Stack Development for Web Services and Applications,
            but have worked with a variety of technologies across a number of fields
        </p>

        <span>Below is a list of technologies/skills I am proficient in:</span>
        <div class="row">
            <div class="col-lg-4">
                <div>
                    <h1 style="color: darkslateblue">Languages</h1>
                    <p v-for="skill in languages" :key="skill">
                        <i class="fas fa-chevron-right"></i> {{skill}}
                    </p>
                </div>
            </div>
            <div class="col-lg-4">
                <div>
                    <h1 style="color: darkslateblue;">Libraries</h1>
                    <p v-for="skill in frameworks" :key="skill">
                        <i class="fas fa-chevron-right"></i> {{skill}}
                    </p>
                </div>
            </div>
            <div class="col-lg-4">
                <div>
                    <h1 style="color: darkslateblue">Other</h1>
                    <p v-for="skill in other" :key="skill">
                        <i class="fas fa-chevron-right"></i> {{skill}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {SkillsObj} from "../constants/PageObjects";

    export default {
        name: "Skills",
        data() {
            return {
                languages: ['Javascript', 'Python', 'C#', 'Java', 'HTML/CSS', 'C/C++', 'VBA/VB.NET', 'SQL'],
                frameworks: ['Jquery', 'Vue.js',
                    'ASP.NET', 'Django',
                    'Bootstrap 4'],
                icons: {
                    'Bootstrap 4': 'fab fa-bootstrap',
                    'Javascript': "fab fa-js-square",
                    'Python': "fab fa-python",
                    'C#': 'fas fa-chevron-right',
                    'Java': "fab fa-java",
                    'HTML/CSS': "fab fa-html5",
                    'C/C++': 'fas fa-chevron-right',
                    'VBA/VB.NET': 'fas fa-chevron-right',
                    'SQL': "fas fa-database",
                    'Vue.js': "fab fa-vuejs",
                    'ASP.NET': 'fas fa-chevron-right',
                    'Django': 'fas fa-chevron-right',
                    'Jquery': 'fas fa-chevron-right'
                },
                other: ['RESTful Web Services', 'MVC', 'Full-stack Development', 'Teaching'],
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm=>{
                vm.$store.commit('addTabToHistory', SkillsObj);
            })
        }

    }
</script>

<style scoped>
    .skills {
        display: flex;
        flex-direction: column;
    }
</style>