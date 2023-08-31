<template>
  <div class="flex flex-col items-center lg:flex-row w-full">
    <img class="w-1/2 object-scale-down" :src="hero?.image" :alt="hero?.alt"/>
    <div class="w-1/2 flex flex-col items-center">
      <div class="flex flex-col items-start">
        <TypeHeader class="text-blue-900" variant="peta" weight="strong">
          {{ hero?.header }}
        </TypeHeader>
        <TypeHeader class="text-blue-900" variant="medium" weight="strong">
          {{ hero?.subheader }}
        </TypeHeader>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Icon from "@/components/Icon.vue";
import TypeHeader from "@/components/TypeHeader.vue";
import { HeroItem } from "@/constants/interfaces";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Hero",
  props: {
    hero: {
      type: Object as PropType<HeroItem>
    }
  },
  components: {
    Icon,
    TypeHeader,
  },
});
</script>