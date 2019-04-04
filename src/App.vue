<template>
    <div class="wrapper" @mouseup="onMouseUp">
        <TheToolbar class="the-toolbar-wrapper"></TheToolbar>

        <div class="content-wrapper">
            <ResizableContainer initial-width="250px" class="the-navigator-wrapper">
                <TheNavigator></TheNavigator>
            </ResizableContainer>
            <router-view class="page-wrapper" />
        </div>

        <TheFootbar class="the-footbar-wrapper"></TheFootbar>
    </div>
</template>

<script>
    import TheToolbar from "@/components/TheToolbar";
    import TheFootbar from "@/components/TheFootbar";
    import TheNavigator from "@/components/TheNavigator";
    import ResizableContainer from "@/components/ResizableContainer";
    import {EventBus} from "@/event-bus";
    export default {
        components: {ResizableContainer, TheNavigator, TheFootbar, TheToolbar},
        methods: {
            onMouseUp() {
                EventBus.$emit('globalMouseUp');
                console.log("Up!");
            }
        }
    }
</script>

<style lang="scss">
    @import "assets/styles/main";
    $exterior-bg: #3c3f41;
    $interior-bg: #252627;
    //$interior-bg: #181818;

    $bar-border: 1px solid rgb(25,25,25);

    .wrapper {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .the-toolbar-wrapper {
        background-color: $exterior-bg;
        border: $bar-border;
        height: 50px;
    }

    .content-wrapper {
        display: flex;
        flex-grow: 1;
    }

    .the-navigator-wrapper {
        //width: 250px;
        //resize: horizontal;
        //overflow: auto;
        //background-color: #252627;
        background-color: $exterior-bg;
    }

    .page-wrapper {
        background-color: $interior-bg;
        flex-grow: 1;
    }

    .the-footbar-wrapper {
        height: 50px;
        background-color: $exterior-bg;
        border: $bar-border;
    }
</style>