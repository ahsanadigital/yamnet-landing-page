<template>
	<div id="coverage-page">
		<section class="need-space ns-header">
			<hr class="ns-separator" />
			<div class="container-xl">
				<ul class="breadcrumb">
					<li class="breadcrumb-item"><nuxt-link class="breadcrumb-link" href="/">Beranda</nuxt-link></li>
					<li class="breadcrumb-item active">Periksa Jangkauan</li>
				</ul>
			</div>
		</section>

		<client-only>
			<coverage-map />
		</client-only>
	</div>
</template>

<style scoped lang="scss">
.ns-header {
	padding-top: 4rem;
	padding-bottom: 1rem;
	background: $gray-100;
	border-radius: 0 0 $border-radius-xxl $border-radius-xxl;

	.ns-separator {
		border-color: $gray-500;
		margin-bottom: 2rem;
	}

	.breadcrumb {
		.breadcrumb-link {
			font-weight: bold;
			color: $dark;
			text-decoration: none;
		}
	}
}
</style>

<script setup lang="ts">
import CoverageMap from "~/components/partials/pages/coverage/maps.vue";

definePageMeta({
	layout: "page",
});

useSeoMeta({
	title: "Periksa Pemetaan Jaringan • YamNet",
	description:
		"Cek jangkauan layanan YamNet dan pastikan lokasi Anda terjangkau oleh jaringan internet Telkomsel Orbit.",
	ogUrl: "https://www.yamnet.id",
	ogDescription:
		"Cek jangkauan layanan YamNet dan pastikan lokasi Anda terjangkau oleh jaringan internet Telkomsel Orbit.",
});
</script>