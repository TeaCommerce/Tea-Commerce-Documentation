# Tea Commerce Documentation

Welcome to the Tea Commerce developer hub. You'll find comprehensive guides and documentation to help you start working with Tea Commerce as quickly as possible, as well as support if you get stuck. Let's jump right in!

<router-link :to="redirectUrl">Get Started</router-link>

<script>
export default {
  computed: {
    redirectUrl() {
      return '/' + this.$site.themeConfig.versions.selected + '/';
    }
  },
  created() {
    this.$router.push(this.redirectUrl)
  }
}
</script>