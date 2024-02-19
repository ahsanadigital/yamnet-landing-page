<template>
	<section class="need-space pt-3" id="contact-us">
		<div class="container-xl pt-5">
			<div class="row align-items-center">
				<div class="col-md-6">
					<CustomerService class="w-100 h-auto" :font-controlled="false" />
				</div>
				<div class="col-md-6">
					<h1 class="mb-3 fw-bold">Mau Internet Yang Stabil ?</h1>
					<p class="fs-5 pb-4 opacity-75">
						Jika Anda tertarik dengan layanan kami, atau ingin
						<b>Kerjasama Kemitraan</b> jual kembali jasa layanan akses internet,
						Kami siapkan dashboard aplikasi yang terintegrasi dengan Whatsapp
						Gateway, Payment Gateway, API Mikrotik, dan yang lainnya. Ada juga
						perhitungan komisi sales, manajemen karyawan, dan lain sebagainya.
						Aplikasi ini dibuat dengan alur yang terstruktur sehingga pekerjaan
						terbagi secara efektif. Selain support system, Kami berikan harga
						terbaik, pelatihan secara menyeluruh. Mari kita diskusikan dan raih
						kesuksesan bersama.
					</p>
					<hr class="pb-4" />
					<ul class="company-info">
						<li class="d-flex gap-3">
							<i class="fas fa-location-arrow company-icon"></i>
							<div class="d-flex flex-column gap-2">
								<div>
									<h4 class="mb-1 fw-bold">Kantor Pusat</h4>
									<p class="mb-0 opacity-75">
										Dusun Bulusari, Kelurahan Bulusulur, Kecamatan Wonogiri,
										Kabupaten Wonogiri, Provinsi Jawa Tengah
									</p>
								</div>
								<div>
									<h4 class="mb-1 fw-bold">Kantor Operasional (Dukungan Teknis)</h4>
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
								<h4 class="mb-0 fw-bold">Email Address</h4>
								<a
									class="text-dark text-decoration-none"
									href="mailto:cs@yamnet.id"
									>cs@yamnet.id</a
								>
							</div>
						</li>
						<li class="d-flex gap-3">
							<i class="fab fa-whatsapp company-icon"></i>
							<div class="d-flex flex-column gap-2">
								<h4 class="mb-0 fw-bold">Whatsapp Service Center</h4>
								<a
									class="text-dark text-decoration-none"
									href="https://api.whatsapp.com/send?phone=62811315215&amp;text=Halo%20Kak,%20Perkenalkan%0ANama%20Saya%20=%20%0AAlamat%20=%20%0AKeperluan%20=%20"
									>0811-315-215</a
								>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
// @ts-nocheck
import CustomerService from "~/assets/images/cs.svg";
</script>

<script lang="ts">
export default {
	name: "ContactUsSection",
};
</script>

<style lang="scss" scoped>
#contact-us .company-info {
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
}

#contact-us .company-info .company-icon {
	width: 3rem;
	border-radius: 50rem;
	flex-shrink: 0;
	border: 1px solid rgba(245, 132, 28, 0.25);
	font-size: 1.25em;
	display: flex;
	color: #f5841c;
	align-items: center;
	justify-content: center;
	height: 3rem;
}
</style>