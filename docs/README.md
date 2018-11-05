# Client Name

## Colours
<color-list :colors="tailwindConfig.colors" />

## Typography
<typography-list :fonts="tailwindConfig.fonts" :sizes="tailwindConfig.textSizes" :weights="tailwindConfig.fontWeights" />

## Padding
<padding-list :padding="tailwindConfig.padding" />

## Opacity
<opacity-list :opacities="tailwindConfig.opacity" />

<script>
import _ from 'lodash'

if (typeof(window) !== 'undefined') window.global = window
const tailwindConfig = require('../tailwind')

export default {
    computed: {
        tailwindConfig: function () {
            return tailwindConfig;
        }
    }
}
</script>