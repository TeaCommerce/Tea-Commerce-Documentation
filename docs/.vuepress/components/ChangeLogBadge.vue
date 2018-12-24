<template>
    <span class="changelog-badge" :class="'changelog-badge--' + type.toLowerCase()">
        {{ type }}
    </span>
</template>

<script>
export default {
    props: ['type']
}
</script>

<style lang="stylus">
    .changelog-badge
        display: inline-block
        background-color: #ddd
        font-size: 1rem
        font-weight: bold
        color: white
        border-radius: 3px
        padding: 0.25rem 1rem
        min-width: 100px
        text-align: center
    .changelog-badge--fix,.changelog-badge--fixed
        background-color: #ff9c38
    .changelog-badge--improvement,.changelog-badge--improved 
        background-color: #607ed7
    .changelog-badge--addition,.changelog-badge--added
        background-color: #acc434
    .changelog-badge--brake,.changelog-badge--broken 
        background-color: #ff5b4d
</style>

