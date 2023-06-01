<script lang="ts">
	import type { Asset } from 'contentful';

	export let title: string;
	export let href: string;
	export let preview: string;
	export let description: string;
	export let media: Asset;
</script>

<li class="project">
	<div class="preview">
		<a href={preview} target="_blank" rel="noreferrer">
			<img src={media.fields.file.url} alt={title} />
		</a>
		<p class="text-cover">Preview</p>
	</div>
	<div class="text">
		<h2>{title}</h2>
		<p>{description}</p>
		<a {href} target="_blank" rel="noreferrer">GitHub</a>
	</div>
</li>

<style lang="scss">
	.project {
		display: flex;
		flex-direction: column;

		.preview {
			position: relative;
			text-align: center;
			max-width: 315px;
			height: 170px;
			margin-bottom: 16px;

			.text-cover {
				position: absolute;
				bottom: 0;
				left: 0;
				z-index: -1;
				width: 100%;
				text-align: center;
				text-transform: uppercase;
				font-weight: 700;
				transition: 0.3s ease-in-out;
				opacity: 0;
				display: block;
			}

			&:hover .text-cover {
				bottom: 20px;
				opacity: 1;
			}
		}

		.preview > a > img {
			width: 100%;
			height: 100%;
			border-radius: 4px;
			opacity: 1;
			transition: 0.3s ease-in-out;
		}

		.preview > a:hover img {
			opacity: 0.5;
		}

		.text {
			h2 {
				color: var(--color-theme-4);
				margin-bottom: 16px;
				font-size: 20px;
			}

			p {
				margin-bottom: 8px;
			}

			a {
				font-size: 14px;
			}

			a:hover {
				color: var(--color-theme-4);
				transition: all 0.8s;
			}
		}
	}
</style>
