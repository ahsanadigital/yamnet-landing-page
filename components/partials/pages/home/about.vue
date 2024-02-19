<template>
  <section class="need-space bg-light" id="about">
    <div class="container-xl">
			<div class="row align-items-center">
				<div class="col-md-5">
					<ExploringImage class="h-auto w-100 text-light" />
				</div>
				<div class="col-md-7">
					<h3 class="subtitle">PT Yasmin Amanah Media (YamNet)</h3>
					<h1 class="title">Berkelana Tak Terbatas Hanya Dari Genggamanmu</h1>

					<div class="mb-2">
						<strong>Internet Dedicated</strong>
						<p class="mb-0">Layanan internet prioritas diperuntukkan bagi instansi atau korporasi, sekolahan, dan pelaku UMKM dengan trafik besar yang membutuhkan koneksi super cepat, stabil dan support yang bagus.</p>
					</div>
					<div class="mb-2">
						<strong>Internet Broadband</strong>
						<p class="mb-0">Untuk internetan di rumah tak perlu mahal. Layanan prima dari YamNet tetap dapat dinikmati sekeluarga dengan pilihan paket sesuai kebutuhan Anda.</p>
					</div>

					<div class="row mt-4">
						<div class="col-4 border-end text-center border-dark-subtle">
							<h3 class="text-primary fw-bold mb-0" id="client-counter-about">
								<count-up :end-val="8133"></count-up>
							</h3>
							<p class="mb-0">Happy Clients</p>
						</div>
						<div class="col-4 border-end text-center border-dark-subtle">
							<h3 class="text-primary fw-bold mb-0" id="company-counter-about">
								<count-up :end-val="12000"></count-up>
							</h3>
							<p class="mb-0">Home Pass</p>
						</div>
						<div class="col-4 border-end text-center">
							<h3 class="text-primary fw-bold mb-0" id="instance-counter-about">
								<count-up :end-val="36"></count-up>
							</h3>
							<p class="mb-0">Mitra YamNet</p>
						</div>
					</div>
				</div>
			</div>
		</div>
  </section>
</template>

<script setup lang="ts">
// @ts-nocheck
import CountUp from 'vue-countup-v3';
import ExploringImage from '~/assets/images/exploring.svg';
</script>

<script lang="ts">
export default {
	name: 'AboutSection',
};
</script>

<style lang="scss" scoped>
.title {
	font-weight: 500;
	font-family: "Gabarito", $font-family-base;
	margin-bottom: 1.25rem;
}

.subtitle {
	font-family: "Gabarito", $font-family-base;
	font-weight: normal;
}
</style>