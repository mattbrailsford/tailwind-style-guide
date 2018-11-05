<template>
    <table class="table table-fixed w-full">
        <tr>
            <td v-for="color in colors" :class="'bg-' + color" class="h-16"></td>
        </tr>
        <tr>
            <td v-for="color in colors" class="align-top text-center"><span class="inline-block whitespace-no-wrap" style="writing-mode: tb-rl;">{{color}}</span></td>
        </tr>
    </table>
</template>

<script>
export default {
    props: ['colors']
}
</script>
