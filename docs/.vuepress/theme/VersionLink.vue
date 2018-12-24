<template>
    <router-link
      to="/versions/"
      class="versions-link"
    >
      {{ currentVersion }}
    </router-link>
</template>

<script>
export default {
    data() {
        return {
            currentVersion: 0
        }
    },
    mounted () {

        this.currentVersion = this.$site.themeConfig.versions.selected
        this.$router.afterEach(() => {
            this.currentVersion = this.$site.themeConfig.versions.selected
        })

    }
}
</script>
