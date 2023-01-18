import { contentfulClient } from '$lib/contentful';
import type { ProjectsList } from 'src/types/contentfulTypes';

export const load = async () => {
	const response = await contentfulClient.getEntries<ProjectsList>({
		content_type: 'projects'
	});

	return {
		projects: response.items.map((item) => item.fields)
	};
};
