<template>
    <table class="changelog">
        <slot />
    </table>
</template>

<style lang="stylus">
    .changelog
        tr, th, td 
            border: 0
            background-color: transparent !important
        th, td
            padding: 0.4rem 0 0.4rem 1rem;
        td:first-child
            padding-left: 0
            padding-right: 0
</style>
