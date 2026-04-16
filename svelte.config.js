import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');
const basePath = dev ? '' : '/electivaII_entregable2';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html'
		}),
		paths: {
			base: basePath
		}
	}
};

export default config;
