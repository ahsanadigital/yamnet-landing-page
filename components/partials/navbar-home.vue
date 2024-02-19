<script lang="ts" setup>
const refNavbar: Ref<HTMLElement | null> = ref(null);
const currentRouteLink = useRoute();

interface NavMenuItem {
	type: "link" | "separator" | "cta";
	to?: string;
	isExternal?: boolean;
	label?: string;
	icon?: string;
	isActive?: boolean;
	onClick?: () => void;
}

const navMenu: NavMenuItem[] = [
	{ type: "link", to: "/", label: "Beranda" },
	{ type: "link", to: "/#pricing", label: "Harga Layanan" },
	{ type: "link", to: "/#service", label: "Total Solution" },
	{ type: "link", to: "/#partner", label: "Partner Teknologi" },
	{ type: "link", to: "/contact-us", label: "Hubungi Kami" },
	{ type: "separator" },
	{
		type: "link",
		to: "https://mydesk.yamnet.id",
		isExternal: true,
		label: "Masuk",
	},
	{ type: "cta", to: "/coverage", label: "Cek Jaringan" },
];

const handlenavbar = () => {
	let currentScrollHeight = window.scrollY;

	if (currentScrollHeight > 50 && refNavbar.value) {
		refNavbar.value.classList.add("scrolled");
	} else {
		refNavbar.value?.classList.remove("scrolled");
	}
};

onMounted(() => window.addEventListener("scroll", handlenavbar));
onUnmounted(() => window.removeEventListener("scroll", handlenavbar));
</script>

<script lang="ts">
export default {
	name: "NavbarHomeComponent",
};
</script>

<style lang="scss" scoped>
.main-navbar {
	transition: all 0.2s;
	padding: 1rem 0;
	margin-top: 0;
	border-radius: $border-radius-xl;

	@media screen and (max-width: 1200px) {
		padding: 1rem;
		border-radius: 0 0 $border-radius-xl $border-radius-xl;
	}

	&.scrolled {
		margin-top: 1rem;
		background: $white;
		padding: 1rem 1.25rem;
		border: 1px solid $gray-300;
		box-shadow: 0 0.25rem 2.5rem 0.5rem rgba($dark, 0.125);

		@media screen and (max-width: 1200px) {
			padding: 1rem;
			margin-top: 0;
		}
	}
}

.navbar {
	padding: 0;
	.navbar-brand {
		padding: 0;

		img {
			height: 48px;
			width: auto;
		}
	}

	.navbar-toggler {
		padding: 0.25rem;
		border: 0;

		&:focus,
		&:active {
			box-shadow: 0 0 0 0.25rem rgba($dark, 0.25);
		}
	}

	.nav-item {
		&:not(:last-child) {
			.nav-link {
				margin-right: 0.5rem;
				position: relative;

				&::before {
					content: "";
					position: absolute;
					bottom: 0;
					left: 0;
					right: 0;
					height: 3px;
					margin: 0 auto;
					background: $secondary;
					width: 0;
					transition: all 0.2s;
					border-radius: $border-radius-pill;
				}

				&.active {
					color: $secondary;
					font-weight: bold;
				}

				&:hover {
					color: $secondary;

					&::before {
						width: 50%;

						@media screen and (max-width: 1200px) {
							width: 0% !important;
						}
					}
				}
			}
		}
	}

	.navbar-nav {
		transition: all 0.2s;

		@media screen and (max-width: 1200px) {
			padding: 1rem;
			border-radius: $border-radius-xl;
			background: $white;
			border: 1px solid $gray-300;
			margin-top: 0.5rem;

			.nav-item:not(:last-child) {
				.nav-link {
					--bs-nav-link-padding-y: 0.5rem;
					--bs-nav-link-padding-x: 0.5rem;

					margin: 0;
				}
			}
		}

		@at-root .scrolled & {
			padding: 0;
			border-color: transparent;

			.nav-item:not(:last-child) {
				.nav-link {
					--bs-nav-link-padding-y: 0.5rem;
					--bs-nav-link-padding-x: 0;
				}
			}
		}
	}

	.separator {
		margin: 0 1rem;
		display: flex;
		align-items: center;
		justify-content: center;

		.line {
			height: 100%;
			border-left: 1px solid transparent;
			border-bottom: 1px solid transparent;
			border-left-color: $gray-500;

			@at-root .scrolled & {
				border-left-color: $gray-300;
			}
		}

		@media screen and (max-width: 1200px) {
			margin: 1rem 0;

			.line {
				width: 100%;
				border-left-color: transparent;
				border-bottom-color: $gray-300;
			}
		}
	}

	.cta-button {
		background-color: $primary;
		color: $white;
		padding: 0.5rem 0.75rem;
		border-radius: $border-radius-lg;

		&:hover {
			background-color: darken($primary, 10%);
		}
	}
}
</style>

<template>
	<nav class="container-xl fixed-top main-navbar" ref="refNavbar">
		<div class="navbar navbar-expand-xl">
			<nuxt-link
				:to="{ name: 'index' }"
				class="navbar-brand"
				title="Kembali Ke Beranda"
			>
				<img
					src="~/assets/images/brands/Yamnet_Horisontal_polos.png"
					alt="YamNet Logo"
				/>
			</nuxt-link>

			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			<client-only>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
						<li
							:class="[{ separator: menu.type === 'separator' }, 'nav-item']"
							v-for="(menu, index) in navMenu"
							:key="index"
						>
							<nuxt-link
								v-if="menu.type === 'link'"
								:class="[
									'nav-link',
									{
										active:
											menu.to === currentRouteLink.fullPath ||
											menu.to === currentRouteLink.hash,
									},
								]"
								aria-current="page"
								:to="menu.to"
								:target="menu.isExternal ? '_blank' : ''"
								>{{ menu.label }}</nuxt-link
							>
							<div v-else-if="menu.type === 'separator'" class="line"></div>
							<nuxt-link
								v-else-if="menu.type === 'cta'"
								class="nav-link cta-button"
								aria-current="page"
								:to="menu.to"
								>{{ menu.label }}</nuxt-link
							>
						</li>
					</ul>
				</div>
			</client-only>
		</div>
	</nav>
</template>