<template>
    <div>
        <div v-for="(groupColors, groupKey) in groupedColors">
            <group-block group-name="color" :heading="groupKey">
                <color-spread :colors="groupColors" />
            </group-block>
        </div>
    </div>
</template>

<script>
import _ from 'lodash'

export default {
    props: ['colors'],
    computed: {
        colorKeys: function () {
            return _.keys(this.colors);
        },
        groupedColors: function () {
            return _.groupBy(this.colorKeys, function (key) {
                return key.split('-')[0];
            })
        }
    }
}
</script>

