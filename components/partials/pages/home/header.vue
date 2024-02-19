<template>
	<header id="masthead">
		<img src="~/assets/images/header/combined-shape.png" class="top-left-image" />

		<div class="dot-animation">
			<span></span><span></span><span></span><span></span><span></span>
		</div>

		<div class="container-xl">
			<div class="row">
				<div class="col-md-5">
					<h1 class="title">
						Saatnya menikmati layanan akses internet
						<u class="text-primary">super cepat!!!</u>
					</h1>
					<p class="description">
						Menjangkau Semua Kalangan Masyarakat Untuk Mendapatkan Akses
						Internet Hebat, Harga Hemat.
					</p>

					<nuxt-link class="btn mx-auto mx-md-0 btn-lg btn-cta" to="#pricing">
						<span>Pilih Paket</span>
						<span class="icon">
							<Icon name="fa6-solid:arrow-right" />
						</span>
					</nuxt-link>
				</div>
				<div class="col-md-6 col-lg-5 mb-5 mb-md-0">
					<div class="image-header">
						<img class="w-100" src="~/assets/images/header/1.png" />
						<img src="~/assets/images/header/2.png" />
						<img src="~/assets/images/header/3.png" />
						<img src="~/assets/images/header/4.png" />
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script lang="ts">
export default {
	name: "HeaderHome",
};
</script>

<style lang="scss">
#masthead {
	background: linear-gradient(to bottom, $gray-300 10%, $white 100%);

	.container-xl {
		position: relative;
		z-index: 10;
	}

	@media screen and (max-width: 768px) {
		padding-top: 5rem;
		text-align: center;
	}

	.dot-animation {
		span {
			opacity: 0.15;
			position: absolute;
			z-index: 1;
			border-radius: 99rem;
			transition: all 0.2s;

			&:nth-child(1) {
				border: 5px solid rgba($red, 1);
				width: 25px;
				height: 25px;
				border-radius: 50%;
				top: 15%;
				left: 45%;
				-webkit-animation: animOne 15s infinite linear;
				animation: animOne 15s infinite linear;
			}

			&:nth-child(2) {
				background: rgba($success, 1);
				width: 10px;
				height: 10px;
				border-radius: 50%;
				top: 12%;
				left: 15%;
				-webkit-animation: animTwo 13s infinite linear;
				animation: animTwo 13s infinite linear;
			}

			&:nth-child(3) {
				border: 5px solid rgba($primary, 1);
				width: 25px;
				height: 25px;
				bottom: 20%;
				left: 30%;
				-webkit-animation: animFour 15s infinite linear alternate;
				animation: animFour 15s infinite linear alternate;
			}

			&:nth-child(4) {
				border: 5px solid rgba($blue, 1);
				width: 35px;
				height: 35px;
				border-radius: 50%;
				top: 15%;
				left: 45%;
				-webkit-animation: animFour 15s infinite linear;
				animation: animFour 15s infinite linear;
			}

			&:nth-child(5) {
				border: 5px solid rgba($green, 1);
				width: 25px;
				height: 25px;
				border-radius: 50%;
				top: 15%;
				left: 45%;
				-webkit-animation: animFive 15s infinite linear;
				animation: animFive 15s infinite linear;
			}
		}
	}

	.top-left-image {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 0;
	}

	.row {
		align-items: center;
		min-height: 100svh;
		justify-content: space-between;

		@media screen and (max-width: 768px) {
			flex-direction: column-reverse;
			justify-content: center;
		}

		.title {
			font-family: "Gabarito", $font-family-base;
			font-weight: 900;
			font-style: italic;
			text-transform: uppercase;
			margin-bottom: 1rem;
			font-size: 2.5rem;

			@media screen and (max-width: 1200px) and (min-width: 768px) {
				font-size: 2rem;
			}

			@media screen and (max-width: 768px) {
				font-size: 2rem;
			}
		}

		.description {
			font-size: 1.25em;
		}
	}

	.image-header {
		position: relative;

		img:not(:first-child) {
			border-radius: 1.5rem;
			overflow: hidden;
			height: 120px;
			width: auto;
			height: auto;

			@media screen and (max-width: 768px) {
				display: none;
			}
		}

		img:nth-child(2) {
			position: absolute;
			top: 15%;
			left: -33%;
			width: 45%;
			box-shadow: 0 22px 45px #0003;
			animation: move-up-down 5s ease-in-out 4s infinite;
		}

		img:nth-child(3) {
			position: absolute;
			top: 47%;
			left: -120px;
			width: 45%;
			transform: scale(0.9);
			box-shadow: 0 22px 45px #00000017;
			animation: move-up-down 4s ease-in-out 1s infinite;
		}

		img:nth-child(4) {
			position: absolute;
			left: 0;
			bottom: -5%;
			width: 45%;
			-webkit-transform: scale(0.9);
			transform: scale(0.9);
			-webkit-box-shadow: 0 22px 45px rgba(0, 0, 0, 0.2);
			box-shadow: 0 22px 45px #0003;
			-webkit-animation: move-up-down 3s ease-in-out 2s infinite;
			animation: move-up-down 3s ease-in-out 2s infinite;
		}
	}

	.btn-cta {
		--bs-btn-color: #{$white};
		--bs-btn-bg: #{$secondary};
		--bs-btn-border-color: #{$secondary};
		--bs-btn-hover-color: #{$white};
		--bs-btn-hover-color: #{$secondary};
		--bs-btn-hover-bg: #{$white};
		--bs-btn-hover-border-color: #{darken($secondary, 10%)};
		--bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba($secondary, 0.5);

		border-radius: 50rem;
		padding: 0.75rem 1.5em;
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 0.2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		width: max-content;
		padding-right: 0.75rem;

		.icon {
			display: flex;
			align-items: center;
			border-radius: 50rem;
			justify-content: center;
			padding: 0.35rem;
			width: 3rem;
			height: 3rem;
			color: $secondary;
			background: $white;
			transition: all 0.2s;
		}

		&:hover .icon {
			background: $secondary;
			color: $white;
		}
	}
}

@keyframes animOne {
	0% {
		-webkit-transform: translate(0px, 0px) rotate(0deg);
		transform: translate(0) rotate(0);
	}

	20% {
		-webkit-transform: translate(73px, -1px) rotate(35deg);
		transform: translate(73px, -1px) rotate(35deg);
	}

	40% {
		-webkit-transform: translate(141px, 72px) rotate(75deg);
		transform: translate(141px, 72px) rotate(75deg);
	}

	60% {
		-webkit-transform: translate(83px, 122px) rotate(110deg);
		transform: translate(83px, 122px) rotate(110deg);
	}

	80% {
		-webkit-transform: translate(-40px, 72px) rotate(145deg);
		transform: translate(-40px, 72px) rotate(145deg);
	}

	to {
		-webkit-transform: translate(0px, 0px) rotate(0deg);
		transform: translate(0) rotate(0);
	}
}

@-webkit-keyframes animOne {
	0% {
		-webkit-transform: translate(0px, 0px) rotate(0deg);
	}

	20% {
		-webkit-transform: translate(73px, -1px) rotate(35deg);
	}

	40% {
		-webkit-transform: translate(141px, 72px) rotate(75deg);
	}

	60% {
		-webkit-transform: translate(83px, 122px) rotate(110deg);
	}

	80% {
		-webkit-transform: translate(-40px, 72px) rotate(145deg);
	}

	to {
		-webkit-transform: translate(0px, 0px) rotate(0deg);
	}
}

@keyframes animTwo {
	0% {
		-webkit-transform: translate(0px, 0px) rotate(0deg) scale(1);
		transform: translate(0) rotate(0) scale(1);
	}

	20% {
		-webkit-transform: translate(73px, -1px) rotate(36deg) scale(0.9);
		transform: translate(73px, -1px) rotate(36deg) scale(0.9);
	}

	40% {
		-webkit-transform: translate(141px, 72px) rotate(72deg) scale(1);
		transform: translate(141px, 72px) rotate(72deg) scale(1);
	}

	60% {
		-webkit-transform: translate(83px, 122px) rotate(108deg) scale(1.2);
		transform: translate(83px, 122px) rotate(108deg) scale(1.2);
	}

	80% {
		-webkit-transform: translate(-40px, 72px) rotate(144deg) scale(1.1);
		transform: translate(-40px, 72px) rotate(144deg) scale(1.1);
	}

	to {
		-webkit-transform: translate(0px, 0px) rotate(0deg) scale(1);
		transform: translate(0) rotate(0) scale(1);
	}
}

@-webkit-keyframes animTwo {
	0% {
		-webkit-transform: translate(0px, 0px) rotate(0deg) scale(1);
	}

	20% {
		-webkit-transform: translate(73px, -1px) rotate(36deg) scale(0.9);
	}

	40% {
		-webkit-transform: translate(141px, 72px) rotate(72deg) scale(1);
	}

	60% {
		-webkit-transform: translate(83px, 122px) rotate(108deg) scale(1.2);
	}

	80% {
		-webkit-transform: translate(-40px, 72px) rotate(144deg) scale(1.1);
	}

	to {
		-webkit-transform: translate(0px, 0px) rotate(0deg) scale(1);
	}
}

@keyframes animThree {
	0% {
		-webkit-transform: translate(165px, -179px);
		transform: translate(165px, -179px);
	}

	to {
		-webkit-transform: translate(-346px, 617px);
		transform: translate(-346px, 617px);
	}
}

@-webkit-keyframes animThree {
	0% {
		-webkit-transform: translate(165px, -179px);
	}

	to {
		-webkit-transform: translate(-346px, 617px);
	}
}

@keyframes animFour {
	0% {
		-webkit-transform: translate(-300px, 151px) rotate(0deg);
		transform: translate(-300px, 151px) rotate(0);
	}

	to {
		-webkit-transform: translate(251px, -200px) rotate(180deg);
		transform: translate(251px, -200px) rotate(180deg);
	}
}

@-webkit-keyframes animFour {
	0% {
		-webkit-transform: translate(-300px, 151px) rotate(0deg);
	}

	to {
		-webkit-transform: translate(251px, -200px) rotate(180deg);
	}
}

@keyframes animFive {
	0% {
		-webkit-transform: translate(61px, -99px) rotate(0deg);
		transform: translate(61px, -99px) rotate(0);
	}

	21% {
		-webkit-transform: translate(4px, -190px) rotate(38deg);
		transform: translate(4px, -190px) rotate(38deg);
	}

	41% {
		-webkit-transform: translate(-139px, -200px) rotate(74deg);
		transform: translate(-139px, -200px) rotate(74deg);
	}

	60% {
		-webkit-transform: translate(-263px, -164px) rotate(108deg);
		transform: translate(-263px, -164px) rotate(108deg);
	}

	80% {
		-webkit-transform: translate(-195px, -49px) rotate(144deg);
		transform: translate(-195px, -49px) rotate(144deg);
	}

	to {
		-webkit-transform: translate(-1px, 0px) rotate(180deg);
		transform: translate(-1px) rotate(180deg);
	}
}

@-webkit-keyframes animFive {
	0% {
		-webkit-transform: translate(61px, -99px) rotate(0deg);
	}

	21% {
		-webkit-transform: translate(4px, -190px) rotate(38deg);
	}

	41% {
		-webkit-transform: translate(-139px, -200px) rotate(74deg);
	}

	60% {
		-webkit-transform: translate(-263px, -164px) rotate(108deg);
	}

	80% {
		-webkit-transform: translate(-195px, -49px) rotate(144deg);
	}

	to {
		-webkit-transform: translate(-1px, 0px) rotate(180deg);
	}
}

@keyframes move-up-down {
	0% {
		-webkit-transform: translateX(0) translateY(5px);
		transform: translate(0) translateY(5px);
	}

	50% {
		-webkit-transform: translateX(0) translateY(-15px);
		transform: translate(0) translateY(-15px);
	}

	to {
		-webkit-transform: translateX(0) translateY(5px);
		transform: translate(0) translateY(5px);
	}
}

@media only screen and (min-width: 481px) {
	#services .row.flex-row {
		display: flex;
		flex-wrap: wrap;
	}

	#services .row.flex-row > [class*="col-"] {
		display: flex;
		flex-direction: column;
	}

	#services .row.flex-row.row:after,
	#services .row.flex-row.row:before {
		display: flex;
	}
}
</style>