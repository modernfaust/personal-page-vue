<template>
    <div class="flex flex-col w-full">
        
    </div>
  </template>
  <script lang="ts">
  import BaseIcon from "@/components/BaseIcon.vue";
  import TypeHeader from "@/components/TypeHeader.vue";
  import TypeSubHeader from "./TypeSubHeader.vue";
  import TypeBody from "./TypeBody.vue";
  import { defineComponent, PropType, ref } from "vue";
  
  export default defineComponent({
    name: "NavigationPanelItem",
    props: {
      panelItems: {
        type: Array as PropType<Array<string>>,
      },
    },
    components: {
      BaseIcon,
      TypeHeader,
      TypeSubHeader,
      TypeBody,
    },
    setup(props) {
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
  