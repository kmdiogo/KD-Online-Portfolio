<template>
    <div class="text-page">
        Fuck
    </div>
</template>

<script>
    export default {
        name: "Skills",
        beforeRouteEnter(to, from, next) {
            next(vm=>{
                vm.$store.commit('addTabToHistory', {
                    name: 'Skills',
                    fileName: 'Skills.html',
                    icon: 'far fa-file-code',
                    iconColor: 'darkorange',
                    to: '/Skills'
                });


            })
        }

    }
</script>

<style scoped>

</style>