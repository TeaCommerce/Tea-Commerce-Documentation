let versioning = require('../.vuepress/lib/versioning.js')
let children = [];

if (versioning.versions.current) {
  children.push(['#current-version', 'Current Version'])
}
if (versioning.versions.next) {
  children.push(['#next-version', 'Next Version'])
}
if (versioning.versions.previous && versioning.versions.previous.length > 0) {
  children.push(['#previous-versions', 'Previous Versions'])
}

module.exports = [
    {
      title: 'Versions',
      collapsable: false,
      children: children
    }
  ]