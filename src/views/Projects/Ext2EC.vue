<template>
    <div class="text-page">
        <div class="d-flex">
            <h1 style="color: forestgreen; margin: 0;">EXT2 Integrity Checker</h1>
            <a class="hover-jump" href="https://github.com/Noah-Whitcomb/Ext2-Integrity-Checker" style="margin-left: auto;">
                <i class="fab fa-github fa-2x"></i>
            </a>
        </div>

        <h2>Validate the Integrity of any EXT2 Filesystem</h2>
        <h3 class="m-0">Technologies: C</h3>
        <hr style="width: 100%;" />

        <h4>
            This was done as a term project for my operating systems class. The program will take any valid EXT2 filesystem, check for any lost or unreachable files,
            and repair the filesystem binary. The project was done in pairs.
        </h4>



    </div>
</template>

<script>
    import {Ext2ECObj} from "../../constants/PageObjects";

    export default {
        name: "Ext2EC",
        beforeRouteEnter(to, from, next) {
            next(vm=> {
                vm.$store.commit('addTabToHistory', Ext2ECObj);
            })
        }
    }
</script>

<style scoped>

</style>