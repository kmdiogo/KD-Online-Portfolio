<template>
    <div class="d-flex flex-column">
        <div class="d-flex toolbar-actions align-items-center">
            <div class="dropdown d-md-none">
                <span class="noselect mobile-menu-btn"><i class="fas fa-bars fa-lg"></i></span>
                <div class="dropdown-content">
                    <TheNavigator></TheNavigator>
                </div>
            </div>

            <div class="dropdown">
                <span class="noselect">Other</span>
                <div class="dropdown-content">
                    <!--<span>Basic HTML (currently unavailable)</span>-->
                    <span><a class="custom-link" href="Kenneth_Diogo_Resume.pdf" download>Download Resume</a></span>
                </div>
            </div>
            <div class="name-sig" style="margin-left: auto; font-family: 'Cute Font', cursive;">
                <a class="hover-jump" href="https://www.linkedin.com/in/kennethdiogo/"><i class="fab fa-linkedin" style="color: #0077b5; margin-right: 5px;"></i></a>
                <a class="hover-jump" href="https://github.com/kmdiogo"><i class="fab fa-github-square"></i></a>
                <span> Kenneth Diogo</span>
            </div>
        </div>
    </div>
</template>

<script>
    import TheNavigator from "./TheNavigator";
    export default {
        name: "TheToolbar",
        components: {TheNavigator},
        methods: {
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/styles/variables";
    .toolbar-actions > div {
        padding: 5px;
    }

    .mobile-menu-btn {
        margin-right: 0.25em;
    }

    .name-sig {
        font-family: 'Righteous', cursive !important;
        font-size: 1.2em;
    }

    .dropdown {
        position: relative;
        display: inline-block;
    }

    .dropdown-content {
        white-space: nowrap;
        display: none;
        position: absolute;
        background-color: $exterior-bg;
        min-width: 180px;
        box-shadow: 0px 8px 16px 0px $highlight-blue;
        //padding: 5px;
        z-index: 10;
    }

    .dropdown-content > span {
        border: 1px solid gray;
        padding: 2px;
    }

    .dropdown:hover {
        outline: none;
    }

    .dropdown:hover > span {
        border: 1px solid gray;
        background-color: rgb(75, 110, 175);
    }

    .dropdown:hover .dropdown-content {
        display: flex;
        flex-direction: column;
        border: 1px solid gray;
    }
</style>