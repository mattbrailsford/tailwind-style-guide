<template>
    <table class="table w-full">
        <tr v-for="(value, key) in padding">
            <td class="px-5 py-3 whitespace-no-wrap" style="width: 1px;">{{key}} ({{value}})</td>
            <td class="px-5 py-3"><div :class="'pl-' + key" class="h-5 bg-grey inline-block"></div></td>
        </tr>
    </table>
</template>

<script>
export default {
    props: ['padding']
}
</script>
