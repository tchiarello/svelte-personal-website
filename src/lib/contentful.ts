import { env } from '$env/dynamic/private';
import { createClient } from 'contentful';

export const contentfulClient = createClient({
	space: env.CONTENTFUL_SPACE_ID,
	accessToken:
		env.NODE_ENV === 'development' ? env.CONTENTFUL_PREVIEW_TOKEN : env.CONTENTFUL_DELIVERY_TOKEN,
	host: env.NODE_ENV === 'development' ? 'preview.contentful.com' : 'cdn.contentful.com'
});
