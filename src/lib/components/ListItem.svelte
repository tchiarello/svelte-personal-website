<script lang="ts">
	import type { Asset } from 'contentful';

	export let title: string;
	export let href: string;
	export let preview: string;
	export let description: string;
	export let media: Asset;
</script>

<li class="project">
	<p>{title}</p>
	<a {href} target="_blank" rel="noreferrer">Link</a>
	<span>{description}</span>
	<a class="media" href={preview} target="_blank" rel="noreferrer">
		<img src={media.fields.file.url} alt={title} />
	</a>
</li>

<style lang="scss">
	.project {
		display: flex;
		flex-direction: column;

		.media {
			text-align: center;
		}

		.media > img {
			width: 90px;
			height: 90px;
		}
	}
</style>
