<template>
    <div class="flex mt-4">
        <div v-for="key in opacityKeysRevered" class="flex-1 relative bg-transparent h-16">
            <div :class="'opacity-' + key" :title="'.opacity-' + key" class="relative w-full h-full bg-red"></div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash'

export default {
    props: ['opacities'],
    computed: {
        opacityKeys: function () {
            return _.keys(this.opacities);
        },
        opacityKeysRevered: function () {
            return _.reverse(this.opacityKeys);
        }
    }
}
</script>
