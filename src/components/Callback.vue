<template>
  <div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
    <span>Signing you in...</span>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { userManager } from '../auth/oidc';

const router = useRouter();
const route = useRoute();

onMounted(async () => {
  const user = await userManager.signinCallback();
  const claims = user.profile;
  // console.log('User claims:', claims);
  const groups = claims['cognito:groups'] || [];

  if (groups.includes('owner') || groups.includes('Admin')) {
    router.replace('/projectOwner');
  } else {
    const target = route.query.redirect || user.state?.target || '/';
    router.replace(target);
  }
});


</script>