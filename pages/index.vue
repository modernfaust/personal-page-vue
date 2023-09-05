<template>
  <div class="bg-slate-100">
    <NavBar :navItems="copy.navItems"/>
    <Hero :hero="copy.hero"/>
    <Experience :experience="copy.experience"/>
    <Projects :projects="copy.projects"/>
    <Footer/>
  </div>
</template>

<script>
import Vue from 'vue'
import NavBar from '@/components/NavBar.vue';
import Hero from '@/components/Hero.vue';
import Experience from '@/components/Experience.vue';
import Footer from '@/components/Footer.vue';
import copy from "@/constants/copy.js";

export default Vue.extend({
  name: 'IndexPage',
  layout: 'empty',
  components: {
    NavBar,
    Hero,
    Experience,
    Footer,
    copy,
  },
  data () {
    return {
      copy:copy,
    }
  },
})
</script>
