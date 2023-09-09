<template>
    <div v-if="text" class="border-solid border-2 rounded-lg font-bold" :class="`${variant === 'solid' ? bgColor : '' } ${textColor} ${borderColor}`">
        <TypeBody class="p-4">{{ text }}</TypeBody>
    </div>
</template>
<script lang="ts">
import TypeBody from "./TypeBody.vue";
import {TagVariants} from "@/constants/enums";
import { defineComponent, PropType } from "vue";

export default defineComponent({
    name:"BaseTag",
    components: {
        TypeBody,
    },
    props: {
        text: {
            type:String as PropType<string>,
        },
        textColor: {
            type:String as PropType<string>,
            default:"text-neutral-200",
        },
        borderColor: {
            type:String as PropType<string>,
            default:"border-neutral-200",
        },
        bgColor: {
            type:String as PropType<string>,
            default:"bg-blue-500",
        },
        variant: {
            type:String as PropType<string>,
            default:'solid',
            validator:(value) => Object.values(TagVariants).includes(value as TagVariants)
        },
    },
});
</script>