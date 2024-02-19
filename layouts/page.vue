<template>
  <div id="page-wrapper">
		<navbar-home-component />
    <slot />
		<footer-home-component />
  </div>
</template>

<script lang="ts" setup>
import NavbarHomeComponent from '~/components/partials/navbar-home.vue';
import FooterHomeComponent from '~/components/partials/footer-home.vue';
</script>