declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
}
interface ImportMetaEnv {
	readonly CONTENTFUL_SPACE_ID: string;
	readonly CONTENTFUL_DELIVERY_TOKEN: string;
	readonly CONTENTFUL_PREVIEW_TOKEN: string;
	NODE_ENV: 'development' | 'production';
}
