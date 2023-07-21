import type { Asset } from 'contentful';

export interface ProjectsList {
	id: number;
	title: string;
	href: string;
	preview: string;
	description: string;
	media: Asset;
}

export interface Profile {
	altText: string;
	profileImage: Asset;
}
