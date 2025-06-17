<template>
  <main>
    <NavBar v-if="!hideNavAndFooter"/>
    <router-view/>
    <FooterComp v-if="!hideNavAndFooter"/>
  </main>
</template>
<script>
import { computed } from 'vue';
import { useRoute} from 'vue-router'
import NavBar from './components/NavBar.vue';
import FooterComp from './components/FooterComp.vue';



export default {
  components: { NavBar, FooterComp },
  setup(){
    const route = useRoute();
    const hideNavAndFooter = computed(() => route.name === 'Login');
    return { hideNavAndFooter };

  }
}
</script>

<style>
html {
  font-size: 16px; /* Reset base font size */
  zoom: 1; /* Ensure no browser zoom is inherited */
}

 * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            /* font-family: Arial, sans-serif; */
        }

body {
    margin: 0;
    background: linear-gradient(135deg, #f0f4f8, #d9e2ec); /* Softer, deeper gradient */
    font-family: 'Amazon Ember', 'Segoe UI', -apple-system, BlinkMacMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: #232f3e;
    padding-top: 70px; /* To accommodate fixed nav */
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