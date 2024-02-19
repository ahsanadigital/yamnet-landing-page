<script setup lang="ts">
import HeaderHome from '@/components/partials/pages/home/header.vue';
import PricingSection from '@/components/partials/pages/home/pricing.vue';
import ServicesSection from '@/components/partials/pages/home/services.vue';
import TestimonialSection from '@/components/partials/pages/home/testimonial.vue';
import AboutSection from '@/components/partials/pages/home/about.vue';
import FeaturedSection from '@/components/partials/pages/home/featured.vue';
import ContactUsSection from '@/components/partials/pages/home/contact-us.vue';

useSeoMeta({
	title: 'Akses Internet Cepat Tanpa Batas • YamNet',
	description: 'Solusi Akses Internet Cepat Tanpa Batas yang Terpercaya dan Efisien. Temukan Pengalaman Berselancar Internet Tanpa Batas dengan Kecepatan Tinggi dan Koneksi Stabil hanya di YamNet. Nikmati Kemudahan Akses Online untuk Semua Kebutuhan Anda dengan Layanan Terbaik dari YamNet.',
	ogUrl: 'https://www.yamnet.id',
	ogDescription: 'Solusi Akses Internet Cepat Tanpa Batas yang Terpercaya dan Efisien. Temukan Pengalaman Berselancar Internet Tanpa Batas dengan Kecepatan Tinggi dan Koneksi Stabil hanya di YamNet. Nikmati Kemudahan Akses Online untuk Semua Kebutuhan Anda dengan Layanan Terbaik dari YamNet.',
});
</script>

<template>
  <div id="home-page">
		<header-home />
		<pricing-section />
		<services-section />
		<testimonial-section />
		<about-section />
		<featured-section />
		<contact-us-section />
  </div>
</template>
