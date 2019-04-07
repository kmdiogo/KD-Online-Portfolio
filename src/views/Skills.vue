<template>
    <div class="text-page skills">
        <div class="h-super1" style="color: forestgreen">Skills</div>
        <hr style="width: 100%;" />

        <div class="row">
            <div class="col-lg-4">
                <div v-if="!skillsAreVisible" class="d-flex flex-column">
                    <vue-typer text="for (let i=0; i < languages.length; i++) {"
                               :pre-type-delay="500" :repeat="0" :type-delay="20">
                    </vue-typer>

                    <vue-typer text="    console.log(languages[i])"
                               :pre-type-delay="1500" :repeat="0" :type-delay="20">
                    </vue-typer>

                    <vue-typer text="}"
                               :pre-type-delay="2500" :repeat="0" :type-delay="20">
                    </vue-typer>
                </div>
                <div v-else>
                    <h1 style="color: darkslateblue">Languages</h1>
                    <p v-for="skill in languages" :key="skill">
                        <i class="fas fa-chevron-right"></i> {{skill}}
                    </p>
                </div>
            </div>
            <div class="col-lg-4">
                <div v-if="!skillsAreVisible" class="d-flex flex-column">
                    <vue-typer text="for (let i=0; i < frameworks.length; i++) {"
                               :pre-type-delay="500" :repeat="0" :type-delay="20">
                    </vue-typer>

                    <vue-typer text="    console.log(frameworks[i])"
                               :pre-type-delay="1500" :repeat="0" :type-delay="20">
                    </vue-typer>

                    <vue-typer text="}"
                               :pre-type-delay="2500" :repeat="0" :type-delay="20">
                    </vue-typer>
                </div>
                <div v-else>
                    <h1 style="color: darkslateblue;">Frameworks</h1>
                    <p v-for="skill in frameworks" :key="skill">
                        <i class="fas fa-chevron-right"></i> {{skill}}
                    </p>
                </div>
            </div>
            <div class="col-lg-4">
                <div v-if="!skillsAreVisible">
                    <p><vue-typer text="for (let i=0; i < other.length; i++) {" :pre-type-delay="500" :repeat="0" :type-delay="20"></vue-typer></p>

                    <p><vue-typer text="    console.log(other[i])" :pre-type-delay="1500" :repeat="0" :type-delay="20"></vue-typer></p>

                    <p><vue-typer text="}" :pre-type-delay="2500" :repeat="0" :type-delay="20"></vue-typer></p>
                </div>
                <div v-else>
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
    import {VueTyper} from 'vue-typer';

    export default {
        name: "Skills",
        components: {
            VueTyper
        },
        data() {
            return {
                languages: ['Javascript', 'Python', 'C#', 'Java', 'HTML/CSS', 'C++', 'VBA/VB.NET', 'SQL'],
                frameworks: ['Jquery', 'Vue.js',
                    'ASP.NET MVC', 'Django',
                    'Bootstrap 4'],
                icons: {
                    'Bootstrap 4': 'fab fa-bootstrap',
                    'Javascript': "fab fa-js-square",
                    'Python': "fab fa-python",
                    'C#': 'fas fa-chevron-right',
                    'Java': "fab fa-java",
                    'HTML/CSS': "fab fa-html5",
                    'C++': 'fas fa-chevron-right',
                    'VBA/VB.NET': 'fas fa-chevron-right',
                    'SQL': "fas fa-database",
                    'Vue.js': "fab fa-vuejs",
                    'ASP.NET MVC': 'fas fa-chevron-right',
                    'Django': 'fas fa-chevron-right',
                    'Jquery': 'fas fa-chevron-right'
                },
                other: ['RESTful Web Services', 'MVC', 'Full-stack Development'],
                skillsAreVisible: false
            }
        },
        mounted() {
            setTimeout(()=>{
                this.skillsAreVisible = true;
            }, 4000);
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