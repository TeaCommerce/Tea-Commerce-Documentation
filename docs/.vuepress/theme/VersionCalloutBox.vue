<template>
    <div class="content" 
      style="padding-bottom: 0;margin-top:2.5rem;margin-bottom: -6rem;"
      v-if="showVersionCalloutBox">
      <callout-box type="warning" :heading=" versionTense + ' docs version' ">
        <p>The documentation you are viewing is for a {{ versionTense.toLowerCase() }} version of Tea Commerce. <router-link :to="'/' + currentVersion + '/'">Click here</router-link> to jump to the current stable version.</p>
      </callout-box>
    </div>
</template>

<script>
import { getVersionFromPath } from './util'

export default {
    data () {
        return {
            isVersionedPage: false,
            nextVersion: 0,
            currentVersion: 0,
            selectedVersion: 0
        }
    }, 
    computed: {
        showVersionCalloutBox () {
            return this.isVersionedPage && this.currentVersion != this.selectedVersion;
        },
        versionTense () {
            return this.selectedVersion == this.nextVersion ? "Future" : "Previous"
        }
    },
    mounted () {
        
        let self = this;

        let doVersionCheck = function (path) {
            const version = getVersionFromPath(path, self.$site.themeConfig.versions.all)
            if (version) {
                self.isVersionedPage = true;
                self.nextVersion = self.$site.themeConfig.versions.next
                self.currentVersion = self.$site.themeConfig.versions.current
                self.selectedVersion = self.$site.themeConfig.versions.selected
            } else {
                self.isVersionedPage = false;
            }
        }

        self.$router.afterEach((to) => {
            doVersionCheck(to.path);
        })
        
        doVersionCheck(self.$router.currentRoute.path);

    }
}
</script>