// Copied from https://github.com/robsontenorio/lighthouse/blob/vuepress/docs/.vuepress/lib/versioning.js
// NB this file does NOT work with hot reloading. You must restart server.

const versions = require('../versions.json')

const allVersions = [versions.next, versions.current, ...versions.previous].filter(v => v)

module.exports = {

  versions: {
    get next () {
      return versions.next;
    },
    get current () {
      return versions.current;
    },
    get previous () {
      return versions.previous;
    },
    get all () {
      return allVersions
    }
  },

  // Generate a single object that represents all versions from each sidebar
  // https://vuepress.vuejs.org/theme/default-theme-config.html#multiple-sidebars
  get sidebars () {
    let sidebars = {}

    allVersions.forEach((version) => {
      try {
        let sidebar = require(`../../${version}/sidebar.js`)
        sidebars[`/${version}/`] = sidebar
      }
      catch (e) {
        if (e instanceof Error && e.code === "MODULE_NOT_FOUND") {
            // If not sidebar is found, just continue
        } else {
            throw e;
        }
      }
    })

    return sidebars
  },

  error (message) {
    console.log("\x1b[41m%s\x1b[0m", ' ERROR ', `${message}\n`)
    process.exit(0)
  },

  info (message) {
    console.log("\x1b[44m%s\x1b[0m", ' INFO ', `${message}\n`)
  },

  success (message) {
    console.log("\x1b[42m\x1b[30m%s\x1b[0m", ' DONE ', `${message}\n`)
  }

}

