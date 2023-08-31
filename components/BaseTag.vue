<template>
    <div v-if="text" class="border-solid border-2 rounded-lg font-bold" :class="`${variant === 'solid' ? bgColor : '' } ${textColor} ${borderColor}`">
        <span class="p-4 font-poppins">{{ text }}</span>
    </div>
</template>
<script lang="ts">
import {TagVariants} from "../constants/enums";

export default {
    name:"BaseTag",
    props: {
        text: {
            type:String,
        },
        textColor: {
            type:String,
            default:"text-neutral-200",
        },
        borderColor: {
            type:String,
            default:"border-neutral-200",
        },
        bgColor: {
            type:String,
            default:"bg-blue-400",
        },
        variant: {
            type:String,
            default:'solid',
            validator:(value) => Object.values(TagVariants).includes(value as TagVariants)
        },
    },
}
</script>