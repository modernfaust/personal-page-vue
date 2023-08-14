<template>
  <div class="bg-slate-500">
    <ContactBar/>
    <Hero/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ContactBar from '~/components/ContactBar.vue';
import Hero from '~/components/Hero.vue';

export default Vue.extend({
  name: 'IndexPage',
  layout: 'empty',
  components: {
    ContactBar,
    Hero,
  }
})
</script>
