<template>
  <div class="flex flex-col items-center laptop:flex-row w-full">
    <div class="w-1/2 flex flex-col items-center">
      <div class="flex flex-col items-center laptop:items-start">
        <TypeHeader class="text-blue-900" variant="peta" weight="strong">
          {{ hero?.header }}
        </TypeHeader>
        <TypeSubHeader class="text-blue-900" variant="medium" weight="strong">
          {{ hero?.subheader }}
        </TypeSubHeader>
        <TypeBody class="text-blue-900" variant="medium" weight="strong">
          {{ hero?.description }}
        </TypeBody>
      </div>
    </div>
    <img class="w-1/2 object-scale-down" :src="hero?.image" :alt="hero?.alt"/>
  </div>
</template>
<script lang="ts">
import Icon from "@/components/BaseIcon.vue";
import TypeHeader from "@/components/TypeHeader.vue";
import TypeSubHeader from "./TypeSubHeader.vue";
import TypeBody from "./TypeBody.vue";
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
    TypeSubHeader,
    TypeBody,
  },
});
</script>