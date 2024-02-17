<script lang="ts" setup>
const refNavbar = ref(null);
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
	{ type: "link", to: "#pricing", label: "Harga Layanan" },
	{ type: "link", to: "#service", label: "Total Solution" },
	{ type: "link", to: "#partner", label: "Partner Teknologi" },
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
</script>

<script lang="ts">
export default {
	name: "NavbarHomeComponent",
};
</script>

<style lang="scss" scoped>
.navbar {
	.navbar-brand img {
		height: 48px;
		width: auto;
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
					border-radius: $border-radius-lg;
				}

				&.active {
					color: $secondary;
					font-weight: bold;
				}

				&:hover {
					color: $secondary;

					&::before {
						width: 50%;
					}
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
			border-left-color: $gray-300;
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
	<nav class="container fixed-top" ref="refNavbar">
		<div class="navbar navbar-expand-lg">
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
		</div>
	</nav>
</template>