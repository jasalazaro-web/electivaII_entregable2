<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { CharacterBrowser } from '$lib/features/character-browser';
	import type { PageData } from './$types';

	export let data: PageData;

	function updateQuery(value: string) {
		const trimmed = value.trim();
		const params = new URLSearchParams(page.url.searchParams);

		params.delete('name');
		params.delete('page');

		if (trimmed) {
			params.set('q', trimmed);
		} else {
			params.delete('q');
		}

		const target = params.toString()
			? `${page.url.pathname}?${params.toString()}`
			: page.url.pathname;

		if (`${page.url.pathname}${page.url.search}` === target) {
			return;
		}

		goto(target, { replaceState: true, noScroll: true });
	}
</script>

<CharacterBrowser data={data} onQueryChange={updateQuery} />
