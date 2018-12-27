<template>
    <nav-link :item="linkItem" />
</template>

<script>
import NavLink from '../theme/NavLink'

export default {
    props: [ 'text', 'href' ],
    components: { NavLink },
    computed: {
        linkItem() {
            return {
                text: this.text,
                link: this.href
            }
        }
    }
}
</script>
