<template>
  <div @click="$emit('reveal',togglePanel())">
    <BaseIcon class="text-blue-900" :icon="navPanelIcon()" size="medium"/>
  </div>
</template>
<script lang="ts">
import BaseIcon from "@/components/BaseIcon.vue";
import TypeHeader from "@/components/TypeHeader.vue";
import TypeSubHeader from "./TypeSubHeader.vue";
import TypeBody from "./TypeBody.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "HamburgerMenu",
  components: {
    BaseIcon,
    TypeHeader,
    TypeSubHeader,
    TypeBody,
  },
  setup() {
    const isPanelOpen = ref(false);

    const navPanelIcon = () => {
      if (isPanelOpen.value) {
        return 'faX';
      }
      else {
        return 'faBars';
      }
    };

    function togglePanel() {
      if (isPanelOpen.value) {
        isPanelOpen.value = false;
      }
      else {
        isPanelOpen.value = true;
      }
      return isPanelOpen.value;
    };

    return {
      isPanelOpen,
      togglePanel,
      navPanelIcon,
    }
  },
});
</script>
