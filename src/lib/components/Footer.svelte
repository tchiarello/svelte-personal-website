<footer>
	<span>Built in Berlin. Powered by SvelteKit</span>
</footer>

<style lang="scss">
	footer {
		display: flex;
		justify-content: center;
		background-color: var(--color-bg);
		color: var(--color-theme-5);
		border-top: 1px solid var(--color-theme-3);
		padding: 24px;
		width: 70%;
		margin: 40px auto 0;

		@media (max-width: 540px) {
			width: 100%;
		}
	}
</style>
