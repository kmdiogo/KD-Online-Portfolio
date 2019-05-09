<template>
    <div class="wrapper" @mouseup="onMouseUp" @mousemove="onMouseMove" @mouseleave="onMouseUp">
        <TheToolbar class="the-toolbar-wrapper flex-shrink-0"></TheToolbar>

        <div class="content-wrapper">
            <ResizableContainer initial-size="250px" class="the-navigator-wrapper">
                <TheNavigator></TheNavigator>
            </ResizableContainer>

            <div class="page-wrapper">
                <PageTabs class="flex-shrink-0"></PageTabs>
                <transition name="fade" mode="out-in">
                    <router-view class="flex-grow-1" style="overflow: auto; height: 0px;" />
                </transition>
            </div>

        </div>

        <TheTerminal class="flex-shrink-0 the-terminal-wrapper" v-if="$store.state.isTerminalOpen"></TheTerminal>

        <TheFootbar class="the-footbar-wrapper flex-shrink-0"></TheFootbar>
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
    import TheTerminal from "./components/TheTerminal";

    export default {
        components: {TheTerminal, PageTabs, ResizableContainer, TheNavigator, TheFootbar, TheToolbar},
        methods: {
            // Global mouse events for resizable container
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
        flex-grow: 1;
        background-color: $interior-bg;
        overflow: auto
    }

    .the-terminal-wrapper {
        height: 20%;
        background-color: $exterior-bg;
    }

    .the-footbar-wrapper {
        height: 50px;
        background-color: $exterior-bg;
        border: $bar-border;
    }

    @media (max-width: 768px) {
        .the-navigator-wrapper {
            display: none !important;
        }
    }
</style>
