<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}>
				<a href="/projects">Projects</a>
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
		box-sizing: border-box;
		position: fixed;
		display: flex;
		justify-content: flex-end;
		width: 100%;
		background-color: var(--color-bg-1);
		padding: 24px 16px;
		box-shadow: 0 -30px 30px 15px rgb(0 0 0 / 70%);

		ul {
			padding: 0;
			margin: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			column-gap: 16px;
			list-style: none;
		}

		a {
			position: relative;
			color: var(--color-text);
			font-weight: 700;
			font-size: 0.8rem;
			text-transform: uppercase;
			letter-spacing: 3px;
		}

		a::before {
			content: "";
			background-color: var(--color-theme-1);
			transition: 0.4s ease-out;
			width: 0%;
			height: 2px;

			position: absolute;
			left: 0;
			bottom: -3px;
		}

		a:hover::before {
			width: 100%;
		}
	}
</style>
