<template>
	<section id="testimonial" class="need-space">
		<div class="container-xl">
			<div class="row">
				<div class="col-md-5">
					<h3 class="subtitle">Testimonial</h3>
					<h1 class="title">Apa yang mereka katakan tentang kami...</h1>
				</div>
				<div class="col-md-7">
					<div class="slider-testimonial">
						<div class="slide-overlay" />

						<div class="slide-inner">
							<swiper
								:loop="true"
								:modules="[SwiperAutoplay, SwiperMousewheel, SwiperPagination]"
								:slides-per-view="1"
								:space-between="150"
								:pagination="true"
								:autoplay="{
									delay: 5000,
									disableOnInteraction: true,
								}"
								:draggable="true"
							>
								<swiper-slide v-for="(slide, id) in testimonies" :key="id">
									<div class="card card-body rounded-4">
										<p>{{ slide.text }}</p>

										<div class="testi-author">
											<TestimonialAvatar :font-controlled="false" class="testi-image" />
											<div class="content">
												<div class="testi-title">{{ slide.author }}</div>
												<div class="testi-occupation">
													{{ slide.occupation }}
												</div>
											</div>
										</div>
									</div>
								</swiper-slide>
							</swiper>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
// @ts-nocheck
import TestimonialAvatar from '~/assets/images/testi-default.svg';

const testimonies: { text: string; author: string; occupation: string }[] = [
	{
		text: "Selama konek dengan yamnet usaha olshop saya jadi makin lancar, upload prodak jadi makin cepet. makasih yamnet!",
		author: "Didi Permadi",
		occupation: "Marketer",
	},
	{
		text: "Terima kasih yamnet, internet ngebut seharian bikin tugas sekolah saya lancar!",
		author: "Vista Natasha Rini",
		occupation: "Pelajar",
	},
	{
		text: "Wah, sangat terbantu sekali ya, internet sudah tersedia di rumah saya, soalnya bingung mau pake quota sinyal ndak ada",
		author: "Wagiyem",
		occupation: "Buruh",
	},
	{
		text: "Selama konek dengan yamnet usaha olshop saya jadi makin lancar, upload prodak jadi makin cepet. makasih yamnet!",
		author: "Didi Permadi",
		occupation: "Marketer",
	},
	{
		text: "Terima kasih yamnet, internet ngebut seharian bikin tugas sekolah saya lancar!",
		author: "Vista Natasha Rini",
		occupation: "Pelajar",
	},
	{
		text: "Wah, sangat terbantu sekali ya, internet sudah tersedia di rumah saya, soalnya bingung mau pake quota sinyal ndak ada",
		author: "Wagiyem",
		occupation: "Buruh",
	},
];
</script>

<script lang="ts">
export default {
	name: "TestimonialSection",
};
</script>

<style lang="scss" scoped>
#testimonial {
	background: linear-gradient(to right, $secondary, $primary);
	color: $white;

	.slider-testimonial {
		position: relative;

		.slide-overlay {
			position: absolute;
			width: 100%;
			height: 80%;
			border-radius: $border-radius-xl;
			background: rgba($white, 0.25);
			transform: rotate(-5deg);
			top: 60px;
			left: 0;
		}

		.slide-inner {
			padding: 1rem;
		}
	}

	.title {
		font-family: "Gabarito", $font-family-base;
		font-weight: 700;
	}

	.subtitle {
		font-weight: 500;
		font-family: "Gabarito", $font-family-base;
	}

	.card-body {
		border-radius: $border-radius-xl;
		padding: 1.5rem;
		background: linear-gradient(to right, $primary, darken($primary, 10%));
		border: 0;
		position: relative;

		&::after {
			content: "\f10e";
			font-family: "Font Awesome 6 Free";
			font-weight: 900;
			position: absolute;
			bottom: 2rem;
			right: 2rem;
			font-size: 3rem;
			line-height: 1;
			opacity: 0.5;
		}

		.testi-author {
			display: flex;
			align-items: center;
			gap: 1rem;

			.testi-image {
				height: 4rem;
				width: 4rem;
				border-radius: $border-radius-pill;
			}

			.content {
				.testi-title {
					font-weight: bold;
					font-size: 1.25em;
				}
			}
		}
	}
}
</style>

<style lang="scss">
#testimonial {
	.swiper {
		.swiper-pagination {
			position: relative;
			margin-top: .5rem;

			.swiper-pagination-bullet {
				background: rgba($white, .875);
				transition: all .2s;

				&.swiper-pagination-bullet-active {
					width: 2rem;
					border-radius: $border-radius-pill;
					background: rgba($white, 1);
				}
			}
		}
	}
}
</style>