<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import type { ProjectsList } from 'src/types/contentfulTypes';

	export let data: { projects: ProjectsList[] };
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="description" content="Portfolio" />
</svelte:head>

<div class="portfolio content-column">
	<h1>Portfolio</h1>

	<div>
		<ul class="items">
			{#each data.projects as item}
				<Card {...item} />
			{/each}
		</ul>
	</div>
</div>

<style lang="scss">
	.portfolio {
		padding: 24px 32px;
		h1 {
			letter-spacing: 3px;
			color: var(--color-theme-2);
			margin-bottom: 50px;
		}

		.items {
			display: grid;
			grid-template-columns: repeat(3, auto);
			column-gap: 16px;
		}

		@media (max-width: 780px) {
			.items {
				grid-template-columns: repeat(2, auto);
				row-gap: 32px;
			}
		}

		@media (max-width: 540px) {
			.items {
				grid-template-columns: 1fr;
			}
		}
	}
</style>
