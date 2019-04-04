<template>
    <div class="wrapper" @mouseup="onMouseUp" @mousemove="onMouseMove" @mouseleave="onMouseUp">
        <TheToolbar class="the-toolbar-wrapper"></TheToolbar>

        <div class="content-wrapper">
            <ResizableContainer initial-width="250px" class="the-navigator-wrapper">
                <TheNavigator></TheNavigator>
            </ResizableContainer>

            <div class="page-wrapper">
                <PageTabs></PageTabs>
                <router-view />
            </div>

        </div>

        <TheFootbar class="the-footbar-wrapper"></TheFootbar>
    </div>
</template>

<script>
    import TheToolbar from "@/components/TheToolbar";
    import TheFootbar from "@/components/TheFootbar";
    import TheNavigator from "@/components/TheNavigator";
    import ResizableContainer from "@/components/shared/ResizableContainer";
    import {EventBus} from "@/event-bus";
    import {throttle} from 'lodash'
    import PageTabs from "./components/PageTabs";

    export default {
        components: {PageTabs, ResizableContainer, TheNavigator, TheFootbar, TheToolbar},
        methods: {
            onMouseUp() {
                EventBus.$emit('globalMouseUp');
            },
            onMouseMove: throttle((e) => {
                EventBus.$emit('globalMouseMove', e);
            }, 20),
        }
    }
</script>

<style lang="scss">
    @import "assets/styles/main";
    @import "assets/styles/variables";

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
        flex-shrink: 0;
    }

    .page-wrapper {
        display: flex;
        flex-direction: column;
        background-color: $interior-bg;
        flex-grow: 1;
    }

    .the-footbar-wrapper {
        height: 50px;
        background-color: $exterior-bg;
        border: $bar-border;
    }
</style>
