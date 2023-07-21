<script>
	import github from '$lib/images/github.svg';
	import linkedin from '$lib/images/linkedin.svg';
</script>

<div class="social-medias">
	<ul>
		<li>
			<a href="https://github.com/tchiarello" target="_blank" rel="noreferrer">
				<img src={github} alt="GitHub icon" />
			</a>
		</li>
		<li>
			<a
				href="https://www.linkedin.com/in/tatiane-chiarello/?locale=en_US"
				target="_blank"
				rel="noreferrer"><img src={linkedin} alt="LinkedIn icon" /></a
			>
		</li>
	</ul>
</div>

<style lang="scss">
	.social-medias {
		position: fixed;
		z-index: 20;
		width: 100%;
		background-color: var(--color-bg);
		border-bottom: 1px solid var(--color-theme-1);
		padding: 24px;

		ul {
			padding: 0;
			margin: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			column-gap: 16px;
			list-style: none;
		}
	}
</style>
