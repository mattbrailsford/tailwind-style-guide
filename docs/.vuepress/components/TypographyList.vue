<template>
    <div>
        <div v-for="(fontList, fontLabel) in fonts">
            <group-block group-name="typography" :heading="fontLabel" :help="'(.font-'+ fontLabel +')'">

                <h4 class="mt-6">Sizes</h4>
                <table class="w-full table">
                    <tr v-for="(textSize, textLabel) in sizes">
                        <td class="px-5 py-3 whitespace-no-wrap" style="width: 1px;">{{textLabel}}</td>
                        <td class="px-5 py-3 leading-normal ellipsis" :class="'font-' + fontLabel + ' text-' + textLabel" >
                            <span class="px-5 py-3">Lorem ipsum dolar sit amet</span>
                        </td>
                    </tr>
                </table>
                
                <h4 class="mt-6">Weights</h4>
                <table class="table w-full overflow-hidden">
                    <tr>
                        <template v-for="weight in weightKeysRevered">
                            <td class="px-5 py-3 text-center">
                                <span 
                                    :class="'font-' + fontLabel + ' font-' + weight" 
                                    class="text-5xl"
                                    :title="'.font-' + weight">A</span>
                            </td>
                        </template>
                    </tr>
                    <tr>
                        <template v-for="weight in weightKeysRevered">
                            <td class="px-5 py-3 whitespace-no-wrap align-top text-center"><span class="inline-block" style="writing-mode: tb-rl;">{{weight}}</span></td>                        </template>
                    </tr>
                </table>

            </group-block>            
        </div>
    </div>
</template>

<script>
import _ from 'lodash'

export default {
    props: ['fonts', 'sizes', 'weights'],
    computed: {
        weightKeys: function () {
            return _.keys(this.weights);
        },
        weightKeysRevered: function () {
            return _.reverse(this.weightKeys);
        }
    }
}
</script>

<style>
    .ellipsis {
        position: relative;
    }
    .ellipsis:before {
        content: 'X';
        visibility: hidden;
    }
    .ellipsis span {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>
