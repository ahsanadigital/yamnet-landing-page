<template>
	<div class="footer">
		<div class="container-xl">
			<section class="pre-footer">
				<div class="row">
					<div
						class="col-md-3 col-6 text-center d-flex flex-column gap-1 mb-5 mb-md-0"
					>
						<h1 class="mb-0 fw-bold" id="client-counter">
							<count-up :end-val="8133"></count-up>
						</h1>
						<p class="mb-0 opacity-75">Happy Client</p>
					</div>
					<div
						class="col-md-3 col-6 text-center d-flex flex-column gap-1 mb-5 mb-md-0"
					>
						<h1 class="mb-0 fw-bold" id="company-counter">
							<count-up :end-val="12000"></count-up>
						</h1>
						<p class="mb-0 opacity-75">Home Pass</p>
					</div>
					<div class="col-md-3 col-6 text-center d-flex flex-column gap-1">
						<h1 class="mb-0 fw-bold" id="instance-counter">
							<count-up :end-val="36"></count-up>
						</h1>
						<p class="mb-0 opacity-75">Mitra YamNet</p>
					</div>
					<div class="col-md-3 col-6 text-center d-flex flex-column gap-1">
						<h1 class="mb-0 fw-bold" id="project-counter">
							<count-up :end-val="205"></count-up>
						</h1>
						<p class="mb-0 opacity-75">Project Area</p>
					</div>
				</div>
			</section>
			<div class="row pt-5">
				<div class="col-md-5 mb-4 mb-md-0">
					<a href="/"
						><img
							src="~/assets/images/brands/png/logo-white.png"
							height="48px"
							class="mb-3"
							alt="PT Yasmin Amanah Media"
					/></a>
					<p>
						Adalah Internet Service Provider (ISP) Legal dengan nomor izin
						penyelenggara 4919/TEL.04.02/2021 dan berlaku secara Nasional.
						Selaras dengan itu, YAMNET mendukung perluasan dan percepatan
						peningkatan keterjangkauan pemerataan layanan akses internet
						sekaligus mendorong pemanfaatan teknologi informasi dan komunikasi
						untuk tujuan peningkatan kecerdasan warga dan kesejahteraan
						masyarakat secara umum.
					</p>
					<div class="socmed-list">
						<a href="#"><i class="fab fa-facebook"></i></a
						><a href="#"><i class="fab fa-twitter"></i></a
						><a href="#"><i class="fab fa-instagram"></i></a
						><a href="#"><i class="fab fa-youtube"></i></a>
					</div>
				</div>
				<div class="col-md-4 mb-4 mb-md-0">
					<ul class="company-info">
						<li class="d-flex gap-3">
							<i class="fas fa-location-arrow company-icon"></i>
							<div class="d-flex flex-column gap-3">
								<div>
									<h4 class="mb-1">Kantor Pusat</h4>
									<p class="mb-0 opacity-75">
										Dusun Bulusari, Kelurahan Bulusulur, Kecamatan Wonogiri,
										Kabupaten Wonogiri, Provinsi Jawa Tengah
									</p>
								</div>
								<div>
									<h4 class="mb-1">Kantor Dukungan Teknis</h4>
									<p class="mb-0 opacity-75">
										Mbanmati RT02 RW09, Dalangan, Tawangsari, Sukoharjo, Jawa
										Tengah
									</p>
								</div>
							</div>
						</li>
						<li class="d-flex gap-3">
							<i class="fas fa-envelope company-icon"></i>
							<div class="d-flex flex-column gap-2">
								<h4 class="mb-0">Contact Us</h4>
								<a
									class="text-white text-decoration-none"
									href="mailto:cs@yamnet.id"
									>cs@yamnet.id</a
								><a
									class="text-white text-decoration-none"
									href="https://api.whatsapp.com/send?phone=62811315215&amp;text=Halo%20Kak,%20Perkenalkan%0ANama%20Saya%20=%20%0AAlamat%20=%20%0AKeperluan%20=%20"
									>0811-315-215</a
								>
							</div>
						</li>
					</ul>
				</div>
				<div class="col-md-3">
					<h4>Informasi</h4>
					<ul class="list-unstyled d-flex flex-column gap-2">
						<li>
							<a class="text-white text-decoration-none" href="#"
								>Tentang Kami</a
							>
						</li>
						<li>
							<a class="text-white text-decoration-none" href="#">Promo</a>
						</li>
						<li>
							<a class="text-white text-decoration-none" href="#contact-us"
								>Hubungi Kami</a
							>
						</li>
						<li><a class="text-white text-decoration-none" href="#">FAQ</a></li>
						<li>
							<a class="text-white text-decoration-none" href="#"
								>Syarat &amp; Ketentuan</a
							>
						</li>
					</ul>
				</div>
			</div>
			<div
				class="row pt-4 mt-5 border-top border-white"
				style="--bs-border-opacity: 0.25"
			>
				<div class="col-md-6">
					<p class="mb-0 text-center text-md-start">
						Copyright © 2023 - PT Yasmin Amanah Media
					</p>
				</div>
				<div class="col-md-6">
					<ul
						class="list-inline justify-content-center d-flex gap-3 justify-content-md-end"
					>
						<li class="list-inline-item">
							<a class="small-text text-white text-decoration-none" href="#"
								>Peraturan</a
							>
						</li>
						<li class="list-inline-item">
							<a class="small-text text-white text-decoration-none" href="#"
								>Keamanan</a
							>
						</li>
						<li class="list-inline-item">
							<a class="small-text text-white text-decoration-none" href="#"
								>Kebijakan Privasi</a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
// @ts-nocheck
import CountUp from "vue-countup-v3";
</script>

<script lang="ts">
export default {
	name: 'FooterHomeComponent',
};
</script>

<style scoped lang="scss">
.footer {
	padding-top: 2rem;
	padding-bottom: 2rem;
	min-height: 20rem;
	margin-top: 5rem;
	background: $primary;
	color: $white;

	.pre-footer {
		background: $white;
		color: $dark;
		border: 1px solid $gray-300;
		padding: 2.5rem 1rem;
		border-radius: $border-radius-xl;
		margin-top: -7.5rem;
		box-shadow: 0 0.25rem 2.5rem 0.5rem rgba(33, 37, 41, 0.125);
	}

	.company-info {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;

		.company-icon {
			width: 3rem;
			border-radius: $border-radius-pill;
			flex-shrink: 0;
			border: 1px solid rgba($white, 0.25);
			font-size: 1.25em;
			display: flex;
			align-items: center;
			justify-content: center;
			height: 3rem;
		}
	}

	.socmed-list {
		display: flex;
		align-items: center;
		gap: 0.5rem;

		a {
			color: $white;
			background: rgba($white, 0.125);
			height: 2.5rem;
			width: 2.5rem;
			font-size: 1.125em;
			border-radius: $border-radius-lg;
			display: flex;
			align-items: center;
			justify-content: center;
			text-decoration: none;
			transition: all 0.2s;

			&:hover {
				color: $primary;
				background-color: $white;
			}
		}
	}
}
</style>