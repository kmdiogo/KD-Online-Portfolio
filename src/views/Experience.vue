<template>
    <div class="text-page skills">
        <img class="media-bg about-me-bg" src="../assets/media/SkillsBg.jpg" />
        <div class="h-super1" style="color: forestgreen">Experience</div>
        <hr style="width: 100%;" />

        <Timeline
                :timeline-items="dataTimeline"
                :message-when-no-items="messageWhenNoItems"
                :unique-year="true"
                order="desc"
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
                messageWhenNoItems: "There arent items",
                dataTimeline: [
                    {
                        from: new Date(2017, 5),
                        title: "Name",
                        description:
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
                    },
                    {
                        from: new Date(2017, 8),
                        title: "Name",
                        description:
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
                    },
                    {
                        from: new Date(2016, 11),
                        title: "Name",
                        description:
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
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