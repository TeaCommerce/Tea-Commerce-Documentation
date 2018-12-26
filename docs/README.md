<script>
export default {
  created() {
    this.$router.push(this.$site.themeConfig.versions.selected + '/getting-started/installation/')
  }
}
</script>