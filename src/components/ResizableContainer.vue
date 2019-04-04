<template>
    <div :style="containerStyle" class="resizable-container">
        <div class="content">
            <slot></slot>
        </div>
        <span class="resize-bar" @mousedown="onMouseDown" draggable="false"></span>
    </div>
</template>

<script>
    import {EventBus} from '@/event-bus'
    export default {
        name: "ResizableContainer",
        props: {
            initialWidth: {
                type: String,
                required: true
            },
            direction: {
                type: String,
                default: 'right'
            }

        },
        created() {
            EventBus.$on('globalMouseUp', ()=>{
                this.isResizing = false;
            })
        },
        data() {
            return {
                containerStyle: {
                    width: this.initialWidth,
                },
                isResizing: false
            }
        },
        methods: {
            onMouseDown(e) {
                e.preventDefault();
                this.isResizing = true;
            },
        }
    }
</script>

<style scoped lang="scss">
    .resizable-container {
        display: flex;
    }
    .content {
        flex-grow: 1;
    }
    .resize-bar {
        background-color: darkgray;
        height: 100%;
        width: 5px;
        cursor: col-resize;
    }
</style>