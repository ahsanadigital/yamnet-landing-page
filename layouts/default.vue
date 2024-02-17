<template>
  <div id="page-wrapper">
		<navbar-home-component />
    <slot />
  </div>
</template>

<script lang="ts" setup>
import NavbarHomeComponent from '~/components/partials/navbar-home.vue';
</script>

<style>
</style>