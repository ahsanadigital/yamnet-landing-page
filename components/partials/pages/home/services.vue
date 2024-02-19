<template>
	<section class="need-space bg-light" id="service">
		<div class="container-xl">
			<div class="row mb-3 justify-content-center">
				<div class="col-md-10">
					<h3 class="ns-title">
						Total Service Solutions for your needs, trust it with us&#33;
					</h3>
					<div class="ns-subtitle">
						Jenis pekerjaan yang masih berkaitan dengan Jasa Internet dapat kami
						layani
					</div>
				</div>
			</div>

			<div class="row flex-row pt-4 justify-content-center">
				<div class="col-md-6 col-xxl-4 pb-4">
					<div
						class="card-service"
					>
						<img
							src="~/assets/images/services/wrench.png"
							alt="YamNet Network Solution"
							height="64px"
						/>
						<div class="card-content">
							<h3 class="mb-0">
								Jasa Manage Service &amp; Maintenance Jaringan
							</h3>
							<p class="opacity-75 mb-0">
								Mengelola semua pekerjaan jaringan lokal tentu sangat
								merepotkan, terlebih saat looping atau problem tak terduga
								menjadi momok yang dihadapi oleh sebagian besar perusahaan. Mari
								solusikan bersama kami! Anda Terima Beres!
							</p>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-xxl-4 pb-4">
					<div
						class="card-service"
					>
						<img
							src="~/assets/images/services/web-hosting.png"
							alt="YamNet Network Solution"
							height="64px"
						/>
						<div class="card-content">
							<h3 class="mb-0">Cloud Hosting</h3>
							<p class="opacity-75 mb-0">
								Perusahan yang berkembang tentu memiliki Website Official,
								E-Mail Server, Storage Server, atau yang lainnya. Support yang
								lamban menjadi salah satu kendala bagi perkembangan usaha Anda.
								Kami melayani Jasa Cloud Hosting terpercaya dan fast respon
								terhadap problem yang Anda alami.
							</p>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-xxl-4 pb-4">
					<div
						class="card-service"
					>
						<img
							src="~/assets/images/services/server.png"
							alt="YamNet Network Solution"
							height="64px"
						/>
						<div class="card-content">
							<h3 class="mb-0">Colocation &amp; Sewa Server Baremetal</h3>
							<p class="opacity-75 mb-0">
								Selain menyediakan Web/Mail/Storage Server, kami menyewakan
								perangkat fisik berupa server 1U yang berada di Data Center
								terkemuka di Jakarta, dengan kapasitas 100Gbps menjadikan usaha
								Anda semakin lancar dan bebas hambatan.
							</p>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-xxl-4 pb-4">
					<div
						class="card-service"
					>
						<img
							src="~/assets/images/services/world-wide-web.png"
							alt="YamNet Network Solution"
							height="64px"
						/>
						<div class="card-content">
							<h3 class="mb-0">Jasa Pembuatan Website</h3>
							<p class="opacity-75 mb-0">
								Jika Anda saat ini sedang membutuhkan jasa pembuatan website,
								mulai dari perancangan, desain &amp; konsep, hingga publikasi
								dan pengelolaan website Anda, Kami siap mewujudkannya!
							</p>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-xxl-4 pb-4">
					<div
						class="card-service"
					>
						<img
							src="~/assets/images/services/mobile-app.png"
							alt="YamNet Network Solution"
							height="64px"
						/>
						<div class="card-content">
							<h3 class="mb-0">Jasa Pembuatan Aplikasi</h3>
							<p class="opacity-75 mb-0">
								Di era teknologi yang semakin berkembang pesat ini akan serba
								mudah jika alur pekerjaan di-implementasikan dalam bentuk
								aplikasi. Kami siap develop aplikasi sesuai kebutuhan Anda!
							</p>
						</div>
					</div>
				</div>
				<div class="col-md-6 col-xxl-4 pb-4">
					<div
						class="card-service"
					>
						<img
							src="~/assets/images/services/hr-manager.png"
							alt="YamNet Network Solution"
							height="64px"
						/>
						<div class="card-content">
							<h3 class="mb-0">Jasa Konsultasi</h3>
							<p class="opacity-75 mb-0">
								Selain yang kami sebutkan diatas, ada kalanya ide/gagasan itu
								muncul setelah sistem berjalan atau problem yang sedang terjadi.
								Mari diskusikan bersama kami. Problem Anda, Inspirasi Solusi
								bagi kami.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
export default {
	name: 'ServicesSection',
};
</script>

<style lang="scss">
.card-service {
	padding: 1.5rem;
	border-radius: $border-radius-xl;
	border: 1px solid $border-color-translucent;
	background: $white;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: 1rem;

	img {
		width: fit-content;
		height: 64px;
	}

	.card-content {
		display: flex;
		gap: .25rem;
		flex-direction: column;

		h3 {
			font-weight: bold;
		}
	}
}
</style>