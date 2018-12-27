<template>
    <div class="callout" :class="'callout--' + type">
        <h4 class="callout__heading">{{ heading }}</h4>
        <slot />
    </div>
</template>

<script>
export default {
    props: ['heading', 'type']
}
</script>

<style lang="stylus">
    .callout
        padding: 1rem 1.5rem
        border-left: 4px solid #333
        margin-top: 1rem
        margin-bottom: 1rem

        > *:first-child
            padding-top: 0;
            margin-top: 0;

        > *:last-child 
            margin-bottom: 0;

    .callout__heading 
        margin-bottom: -.5rem;

    .callout--info
        background-color: #F5F7F9
        border-color: rgb(56, 132, 255)

        .callout__heading 
            color: rgb(56, 132, 255)

    .callout--warning
        background-color: #fcf8f2
        border-color: #f0ad4e

        .callout__heading 
            color: #f0ad4e
</style>

