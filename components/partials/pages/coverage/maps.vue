<template>
	<section class="need-space">
		<div class="container-xl">
			<div class="pb-4 text-center">
				<h1 class="fw-bold">Periksa Jangkauan</h1>
				<p style="font-size: 1.25em">
					Periksa terlebih dahulu jangkauan layanan internet kami dan periksa
					detail jangkauan pada titik pemetaan berikut ini.
				</p>
			</div>

			<div class="rounded-5 overflow-hidden">
				<div id="map-wrapper" style="height: 750px" />
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
import L, { Icon, Map } from "leaflet";

let refMap = ref<Map | null>(null);
let locations: [string, number, number][] = [
	["Kelurahan Purworejo", -7.827877521514893, 110.95867919921875],
	["Area Pemerintah Kabupaten Wonogiri, KUA Wonogiri, Ring-Road Wonogiri", -7.8154, 110.9258],
	["Kelurahan Wonoboyo", -7.812417030334473, 110.93628692626953],
	["Kelurahan Bulusulur", -7.8098297119140625, 110.95530700683594],
	["Kelurahan Purwosari", -7.7944440841674805, 110.9483871459961],
	["Kelurahan Ngadirojo", -7.835312843322754, 111.00146484375],
	["Area Kantor Camat Ngadirojo dan Seluruh Wilayah Kecamatan Ngadirojo", -7.814612474966151, 110.99549039209862],
];

const initMap = () => {
	if (!refMap.value) {
		const map = L.map("map-wrapper").setView([-7.812, 110.965], 14);
		refMap.value = map;

		L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
			attribution:
				'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
		}).addTo(map);

		
		const yamnetIcon = new Icon({
			iconUrl: '/Yamnet_Vertical.png', // Adjust the path accordingly
			iconSize: [96, 96], // Adjust the size if necessary
		});

		for (var i = 0; i < locations.length; i++) {
			L.marker([locations[i][1], locations[i][2]], {icon: yamnetIcon})
				.bindPopup(locations[i][0])
				.addTo(map);
		}
	}
};

const destroyMap = () => {
	if (refMap.value) {
		refMap.value.remove();
		refMap.value = null;
	}
};

onMounted(initMap);
onUpdated(initMap);

onBeforeUpdate(destroyMap);
onBeforeUnmount(destroyMap);
</script>

<script lang="ts">
export default {
	name: "CoverageMap",
};
</script>
