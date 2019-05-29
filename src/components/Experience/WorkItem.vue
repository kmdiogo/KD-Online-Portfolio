<template>
    <div class="work-item-wrapper">
        <div class="header-wrapper">
            <h3 style="margin: 0;">{{year}}</h3>
        </div>
        <div class="body-wrapper">
            <h2 style="margin: 0"><b>{{jobTitle}}</b></h2>
            <h3 style="margin: 0; font-weight: normal"><i>{{company}}</i></h3>
            <div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WorkItem",
        props: {
            year: {
                required: true,
                type: String
            },
            jobTitle: {
                required: true,
                type: String
            },
            company: {
                required: true,
                type: String
            },
        }
    }
</script>

<style scoped>
    .work-item-wrapper {
        display: flex;
    }

    .header-wrapper {
        min-width: 100px;
        display: flex;
        justify-content: center;
        padding: 0.5rem;
    }

    .body-wrapper {
        border-left: 5px solid #ccd5db;
        flex-grow: 1;
        padding: 0.5rem;
    }
</style>