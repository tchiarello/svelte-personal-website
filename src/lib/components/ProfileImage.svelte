<script lang="ts">
	import type { Profile } from 'src/types/contentfulTypes';

	export let data: Profile[];
</script>

<div class="profile-image">
	<img src={data[0].profileImage.fields.file.url} alt={data[0].altText} />
</div>

<style lang="scss">
	.profile-image {
		width: 300px;
		height: auto;

		img {
			width: 100%;
			height: 100%;
		}
	}
</style>
