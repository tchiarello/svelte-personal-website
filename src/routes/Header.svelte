<script>
	import { page } from '$app/stores';
	import github from '$lib/images/github.svg';
	import linkedin from '$lib/images/linkedin.svg';
</script>

<header>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a class="link" href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}>
				<a class="link" href="/projects">Projects</a>
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
		box-sizing: border-box;
		position: fixed;
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
			color: var(--color-theme-2);
			font-weight: 700;
			font-size: 0.8rem;
			text-transform: uppercase;
			letter-spacing: 2px;
			transition: all 0.8s;
		}

		.link:hover {
			color: var(--color-theme-2);
		}

		.link::before {
			content: '';
			background-color: var(--color-theme-2);
			transition: 0.4s ease-out;
			width: 0%;
			height: 2px;

			position: absolute;
			left: 0;
			bottom: -3px;
		}

		.link:hover::before {
			width: 100%;
		}
	}
</style>
