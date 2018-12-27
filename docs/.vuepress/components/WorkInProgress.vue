<template>
    <div class="tip custom-block">
        <p class="custom-block-title">Work in Progress</p>
        <p>If you would like to help write the documentation for this section, you can find details on how over at our <smart-link text="GitHub repository" :href="repoUrl" />.</p>
    </div>
</template>

<script>
export default {
    computed: {
        repoUrl() {
            return "https://github.com/" + this.$site.themeConfig.repo
        }
    }
}
</script>
