<template>
  <div>
    <Spinner />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { userManager } from '../auth/oidc';
import Spinner from './Spinner.vue';

const router = useRouter();
const route = useRoute();
// const loading = ref(false);

onMounted(async () => {
  const user = await userManager.signinCallback();
  // const claims = user.profile;
  // console.log('User claims:', claims);
  const target = route.query.redirect || user.state?.target || '/';
  router.replace(target);

});


</script>