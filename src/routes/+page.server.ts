import { contentfulClient } from '$lib/contentful';
import type { Profile } from 'src/types/contentfulTypes';

export const load = async () => {
	const response = await contentfulClient.getEntries<Profile>({
		content_type: 'profile'
	});

	return {
		profile: response.items.map((item) => item.fields)
	};
};
