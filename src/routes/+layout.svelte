<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import './global.scss';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style lang="scss">
	.app {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
	}
</style>
