<template>
    <section :id="tabId" role="tabpanel" class="tabs-component-panel"
        v-show="isActive">
        <slot></slot>
    </section>
</template>

<script>
export default {
    props: {
        name: { required: true },
        selected: { default: false}
    },
    
    data() {
        return {
            isActive: false
        };
    },
    
    computed: {
        tabId() {
            return 'tab-' + this._uid;
        },
        href() {
            return '#' + this.tabId;
        }
    },
    
    mounted() {
        this.isActive = this.selected;
    }
}
</script>