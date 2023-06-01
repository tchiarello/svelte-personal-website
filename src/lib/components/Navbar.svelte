<script>
	import { page } from '$app/stores';
	import github from '$lib/images/github.svg';
	import linkedin from '$lib/images/linkedin.svg';
</script>

<header>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a class="link home" href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/portfolio' ? 'page' : undefined}>
				<a class="link portfolio" href="/portfolio">Portfolio</a>
			</li>
		</ul>
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
	</nav>
</header>

<style lang="scss">
	header {
		position: fixed;
		z-index: 20;
		width: 100%;
		background-color: var(--color-bg);
		border-bottom: 1px solid var(--color-theme-1);
		padding: 24px;

		nav {
			display: flex;
			justify-content: space-between;
		}

		ul {
			padding: 0;
			margin: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			column-gap: 16px;
			list-style: none;
		}

		.link {
			position: relative;
			color: var(--color-theme-5);
			font-weight: 700;
			font-size: 0.8rem;
			text-transform: uppercase;
			letter-spacing: 2px;
			transition: 0.4s ease-out;
		}

		.home:hover {
			color: var(--color-theme-3);
		}

		.portfolio:hover {
			color: var(--color-theme-2);
		}

		.link::before {
			content: '';
			position: absolute;
			left: 0;
			bottom: -3px;
			width: 0%;
			height: 2px;
			transition: 0.4s ease-out;
		}

		.home::before {
			background-color: var(--color-theme-3);
		}

		.portfolio::before {
			background-color: var(--color-theme-2);
		}

		.link:hover::before {
			width: 100%;
		}
	}
</style>
