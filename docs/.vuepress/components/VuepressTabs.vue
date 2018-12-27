<template>
    <div class="vuepress-tabs">
        <div class="tabs-component">
            <ul role="tablist" class="tabs-component-tabs">
                <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }" role="presentation" class="tabs-component-tab">
                    <a :href="tab.href" @click.prevent="selectTab(tab)" role="tab" class="tabs-component-tab-a">{{ tab.name }}</a>
                </li>
            </ul> 
            <div class="tabs-component-panels">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            tabs: []
        }
    },
    mounted() {
        var self = this;
        self.tabs = self.$children;
        setTimeout(function () {
            self.selectTab(self.tabs[0]);
        }, 5)
    },
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    }
}
</script>

