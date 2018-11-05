<template>
    <h3 class="mb-3 mt-6"><a :href="'#' + slug" class="header-anchor" aria-hidden="true">#</a> <span class="capitalize">{{heading}}</span> <small class="text-base">{{help}}</small></h3>
</template>

<script>
import _ from 'lodash'

export default {
    props: ['heading', 'groupName', 'help'],
    computed: {
        slug: function () {
            let rawSlug = (this.groupName ? this.groupName + ' ' : '') + this.heading;
            return encodeURIComponent(String(rawSlug).trim().toLowerCase().replace(/\s+/g, '-'))
        }
    }
}
</script>

