<template>
    <hr :class="`w-72 h-[1px] mx-auto my-4 ${color} border-0 rounded md:my-10`"/>
</template>
<script lang="ts">
import {DividerVariants} from "../constants/enums";
import { defineComponent, PropType } from "vue";

export default defineComponent({
    name: "BaseDivider",
    props: {
        variant: {
            type: String as PropType<string>,
            default:'solid',
            validator:(value) => Object.values(DividerVariants).includes(value as DividerVariants)
        },
        color: {
            type: String as PropType<string>,
            default: "bg-neutral-200",
        },
        size: {
            type: String as PropType<string>,
        },
        outline: {
            type: String as PropType<string>,
        },
    },
});
</script>