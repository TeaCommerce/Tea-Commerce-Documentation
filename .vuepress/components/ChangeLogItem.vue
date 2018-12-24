<template>
    <tr>
        <td><change-log-badge :type="changeType"/></td>
        <td><slot /></td>
    </tr>
</template>

<script>
export default {
    props: ['changeType']
}
</script>

