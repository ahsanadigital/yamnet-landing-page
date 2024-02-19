<template>
	<div id="nuxt-wrapper-content">
		<NuxtLoadingIndicator />
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<style lang="scss">
@media only screen and (min-width: 481px) {
	.flex-row {
		display: flex;
		flex-wrap: wrap;
	}
	.flex-row > [class*="col-"] {
		display: flex;
		flex-direction: column;
	}
	.flex-row.row:after,
	.flex-row.row:before {
		display: flex;
	}
}

.need-space {
	padding-top: 5rem;
	padding-bottom: 5rem;
	min-height: 5rem;

	.ns-title {
		text-align: center;
		font-size: 2.25rem;
		font-weight: bold;
	}

	.ns-subtitle {
		text-align: center;
		font-size: 1.125rem;
	}
}
</style>