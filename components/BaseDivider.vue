<template>
    <hr :class="`w-72 h-[1px] mx-auto my-4 ${color} border-0 rounded md:my-10`"/>
</template>
<script lang="ts">
import {DividerVariants} from "../constants/enums";

export default {
    name: "BaseDivider",
    props: {
        variant: {
            type: String,
            default:'solid',
            validator:(value) => Object.values(DividerVariants).includes(value as DividerVariants)
        },
        color: {
            type: String,
            default: "bg-neutral-200",
        },
        size: {
            type: String,
        },
        outline: {
            type: String,
        },
    },
}
</script>