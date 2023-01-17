import type { Asset } from 'contentful';

export interface ProjectsList {
	id: number;
	title: string;
	href: string;
	description: string;
	video?: Asset;
}
