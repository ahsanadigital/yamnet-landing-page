<template>
	<section class="need-space" id="featured">
		<div class="container-xl">
			<div class="row justify-content-center">
				<div class="col-md-7">
					<h1 class="ns-title">Internet Murah, Stabil dan Unlimited</h1>
					<p class="ns-subtitle">
						Fitur-Fitur berikut ini yang akan Anda dapatkan
					</p>
				</div>
			</div>
			<div class="row pt-5">
				<div class="col-xl-9 col-lg-12">
					<div class="row">
						<div class="col-md-6">
							<div class="d-flex align-items-start gap-3 gap-md-4 pb-3 pb-md-5">
								<span
									class="fas fa-life-ring p-3 bg-primary rounded-3 fs-4 text-white"
								></span>
								<div class="flex-column d-flex gap-1">
									<h4 class="mb-0">24/7 Support</h4>
									<p class="mb-0 opacity-75">
										Pelayanan gangguan 24 jam sehari, dan 7 hari seminggu siap
										kapanpun menangani layanan gangguan.
									</p>
								</div>
							</div>
							<div class="d-flex align-items-start gap-3 gap-md-4 pb-3 pb-md-5">
								<span
									class="fas fa-map p-3 bg-primary rounded-3 fs-4 text-white"
								></span>
								<div class="flex-column d-flex gap-1">
									<h4 class="mb-0">Coverage Area</h4>
									<p class="mb-0 opacity-75">
										Menjangkau wilayah tertentu, didukung oleh team support yang
										berpengalaman dan menyediakan basecamp di setiap wilayah
										terdekat dengan pelanggan sehingga penanganan gangguan lebih
										cepat.
									</p>
								</div>
							</div>
							<div class="d-flex align-items-start gap-3 gap-md-4 pb-3 pb-md-0">
								<span
									class="fas fa-server p-3 bg-primary rounded-3 fs-4 text-white"
								></span>
								<div class="flex-column d-flex gap-1">
									<h4 class="mb-0">Pilihan Platform Terbaik</h4>
									<p class="mb-0 opacity-75">
										YamNet menggunakan perangkat &amp; platform yang capable,
										berkapasitas besar, sehingga menghadirkan pengalaman akses
										internet terbaik dan stabil bagi seluruh pelanggan.
									</p>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="d-flex align-items-start gap-3 gap-md-4 pb-3 pb-md-5">
								<i
									class="fa-solid fa-shield p-3 bg-secondary rounded-3 fs-4 text-white"
								></i>
								<div class="flex-column d-flex gap-1">
									<h4 class="mb-0">Garansi Kualitas Layanan</h4>
									<p class="mb-0 opacity-75">
										Kami memahami bahwa internet menjadi kebutuhan pokok bagi
										setiap orang. Akses internet yang berkualitas menjadi
										keunggulan produk kami. Memiliki CDN local, dan rancangan
										multiple backbone ke upstream membuat layanan akses internet
										lebih reliable dan minim downtime, sehingga konektifitas
										internet Anda tidak terganggu.
									</p>
								</div>
							</div>
							<div class="d-flex align-items-start gap-3 gap-md-4 pb-3 pb-md-5">
								<span
									class="fas fa-credit-card p-3 bg-secondary rounded-3 fs-4 text-white"
								></span>
								<div class="flex-column d-flex gap-1">
									<h4 class="mb-0">Unlimited, Tanpa Batas Quota!</h4>
									<p class="mb-0 opacity-75">
										Kami Pastikan Semua Paket Internet UNLIMITED! Kami tidak
										memberlakukan pembatasan Quota.
									</p>
								</div>
							</div>
							<div class="d-flex align-items-start gap-3 gap-md-4 pb-0">
								<span
									class="fas fa-link p-3 bg-secondary rounded-3 fs-4 text-white"
								></span>
								<div class="flex-column d-flex gap-1">
									<h4 class="mb-0">Media Fiber &amp; Wireless</h4>
									<p class="mb-0 opacity-75">
										Menggunakan Media fiber untuk akses internet super cepat,
										Wireless membuat akses internet semakin luas dan terjangkau.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-3 d-xl-inline d-none d-lg-none">
					<div class="image-content" />
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
export default {
	name: "FeaturedSection",
};
</script>

<style lang="scss" scoped>
.image-content {
	background: url('~/assets/images/server.jpg') no-repeat center center;
	background-size: cover;
	height: 100%;
	border-radius: $border-radius-xl;
}
</style>