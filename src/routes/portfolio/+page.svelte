<script lang="ts">
	import ListItem from '$lib/components/ListItem.svelte';
	import type { ProjectsList } from 'src/types/contentfulTypes';

	export let data: { projects: ProjectsList[] };
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="description" content="Portfolio" />
</svelte:head>

<div class="content-column">
	<h1>Portfolio</h1>

	<div>
		<ul>
			{#each data.projects as item}
				<ListItem {...item} />
			{/each}
		</ul>
	</div>
</div>
