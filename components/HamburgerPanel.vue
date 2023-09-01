<template>
  <div>
    <BaseIcon class="text-blue-900" icon="faBars" size="medium" @click="" />
  </div>
</template>
<script lang="ts">
import BaseIcon from "@/components/BaseIcon.vue";
import TypeHeader from "@/components/TypeHeader.vue";
import TypeSubHeader from "./TypeSubHeader.vue";
import TypeBody from "./TypeBody.vue";
import { HeroItem } from "@/constants/interfaces";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "HamburgerPanel",
  props: {
    hero: {
      type: Object as PropType<HeroItem>,
    },
  },
  components: {
    BaseIcon,
    TypeHeader,
    TypeSubHeader,
    TypeBody,
  },
  setup(props) {
  },
});
</script>
