<script lang="ts">
	import ProfileImage from '$lib/components/ProfileImage.svelte';
	import type { Profile } from 'src/types/contentfulTypes';

	export let data: { profile: Profile[] };
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Home" />
</svelte:head>

<section class="home">
	<h1>Home</h1>

	<div class="profile">
		<div>Ola</div>
		<ProfileImage data={data.profile} />
	</div>
</section>

<style lang="scss">
	.home {
		/* background-image: url('../lib/images/bg-home.svg');
		background-repeat: no-repeat;
		background-position: center; */
		width: 100%;
		padding: 24px 32px;

		h1 {
			letter-spacing: 3px;
			color: var(--color-theme-3);
			margin-bottom: 50px;
		}

		.profile {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
</style>
