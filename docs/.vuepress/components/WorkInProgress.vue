<template>
    <div class="tip custom-block">
        <p class="custom-block-title">Work in Progress</p>
        <p>If you would like to help write the documentation for this section, you can find details on how over at our <nav-link :item="gitHubLink" />.</p>
    </div>
</template>

<script>
import NavLink from '../theme/NavLink'

export default {
    components: { NavLink },
    computed: {
        gitHubLink() {
            return {
                text: "GitHub repository",
                link: this.repoUrl
            }
        },
        repoUrl() {
            return "https://github.com/" + this.$site.themeConfig.repo
        }
    }
}
</script>
