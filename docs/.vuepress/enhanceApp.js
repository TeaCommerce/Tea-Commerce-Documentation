import { getVersionFromPath } from './theme/util'
import Tabs from 'vue-tabs-component'

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
  }) => {
  
    Vue.use(Tabs)

    // Select docs version based on url path
    // Example: "/2.6/guides/installation.html" will use "2.6"
    router.afterEach((to, from) => {
      const version = getVersionFromPath(to.path, siteData.themeConfig.versions.all)
      if (version) {
        siteData.themeConfig.versions.selected = version
      }
    })

    // Redirect to current docs
    router.addRoutes([
      { 
        path: '/', redirect: to => {
          return `/${siteData.themeConfig.versions.selected}/`
        } 
      },
    ])
}