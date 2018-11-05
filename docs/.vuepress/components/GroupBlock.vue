<template>
    <div>
        <group-block-heading :heading="heading" :group-name="groupName" :help="help" />
        <slot />
    </div>
</template>

<script>
export default {
    props: ['heading', 'groupName', 'help']
}
</script>
