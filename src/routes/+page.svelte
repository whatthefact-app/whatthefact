<script lang="ts">
	import type { PageData } from './$types';
	import NavigationButton from '../components/NavigationButton.svelte';
	import { facts } from '../stores/facts';
	import { shuffle } from '../utils/shuffle';
	import type { Country, Fact } from '../types/types';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import { countries } from '../constants/constants';

	export let data: PageData;

	let currentCountry: string;
	let paramCountry = $page.url.searchParams.get('country');

	currentCountry = paramCountry || data.country;

	$: facts.set(shuffle(data.facts));

	$: if (browser) goto(`/?country=${currentCountry}`, { keepFocus: true, invalidateAll: true });
</script>

<section class="flex flex-col items-center gap-12 pt-16">
	<h1 class="text-center font-heading text-heading font-black leading-none">
		Test your knowledge about nature around you.
	</h1>

	<p>You're playing in</p>

	<form>
		<select bind:value={currentCountry} class="">
			<option value="PT" selected={currentCountry === 'PT'}>Portugal</option>
			<option value="FR" selected={currentCountry === 'FR'}>France</option>
			<option value="US" selected={currentCountry === 'US'}>USA</option>
		</select>
	</form>

	<NavigationButton href={`/${$facts[0].id}`}>Play</NavigationButton>
</section>
