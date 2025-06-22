<template>
  <main>
    <Spinner v-if="loading" />
    <NavBar v-if="!hideNavAndFooter" />
    <router-view />
    <FooterComp v-if="!hideNavAndFooter" />
  </main>
</template>
<script>
import { computed, ref, provide } from 'vue';
import { useRoute } from 'vue-router'
import Spinner from './components/Spinner.vue';
import NavBar from './components/NavBar.vue';
import FooterComp from './components/FooterComp.vue';



export default {
  components: { NavBar, FooterComp, Spinner },
  setup() {
    const route = useRoute();
    const loading = ref(false);

    provide('globalLoading', loading);
    provide('setGlobalLoading', (value) => {
      loading.value = value;
    });
    const hideNavAndFooter = computed(() => route.name === 'Login');
    return { hideNavAndFooter, loading };

  }
}
</script>

<style>
html {
  font-size: 16px;
  /* Reset base font size */
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  /* font-family: Arial, sans-serif; */
}

body {
  margin: 0;
  background: linear-gradient(135deg, #f0f4f8, #d9e2ec);
  /* Softer, deeper gradient */
  font-family: 'Amazon Ember', 'Segoe UI', -apple-system, BlinkMacMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  color: #232f3e;
  padding-top: 70px;
  /* To accommodate fixed nav */
  min-height: 100vh;
  line-height: 1.6;
  zoom: 1;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #232f3e;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 0.5em;
}

p {
  margin-bottom: 1em;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>