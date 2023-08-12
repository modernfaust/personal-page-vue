<template>
  <ContactBar/>
</template>

<script lang="ts">
import Vue from 'vue'
import ContactBar from '~/components/ContactBar.vue';

export default Vue.extend({
  name: 'IndexPage',
  layout: 'empty',
  components: {
    ContactBar,
  }
})
</script>
