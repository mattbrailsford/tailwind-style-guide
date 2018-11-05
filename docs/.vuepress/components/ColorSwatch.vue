<template>
    <div class="relative">
        <div :class="'bg-' + color" class="w-full h-16" :title="'.' + color"></div>
    </div>
</template>

<script>
export default {
    props: ['color']
}
</script>
