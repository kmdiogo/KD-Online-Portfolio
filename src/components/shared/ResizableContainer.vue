<template>
    <div :style="containerStyle" class="resizable-container">
        <div class="content">
            <slot></slot>
        </div>
        <span v-if="direction === 'right'" class="resize-bar" @mousedown="onMouseDown" draggable="false"></span>
    </div>
</template>

<script>
    import {EventBus} from '@/event-bus'
    export default {
        name: "ResizableContainer",
        props: {
            initialSize: {
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
            });
            EventBus.$on('globalMouseMove', (e)=>{
                if (this.isResizing && e.clientX > 200 && e.clientX < window.innerWidth/2) {
                    this.containerStyle.width = `${e.clientX}px`;
                }
            });
        },
        data() {
            return {
                containerStyle: {
                    width: this.initialSize,
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
        overflow: auto;
    }
    .resize-bar {
        background-color: darkgray;
        z-index: 1;
        height: 100%;
        width: 5px;
        cursor: e-resize;
    }
</style>
