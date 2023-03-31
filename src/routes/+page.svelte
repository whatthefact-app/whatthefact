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
	const { country, facts: dbFacts } = data;

	let currentCountry: string;
	let paramCountry = $page.url.searchParams.get('country');

	currentCountry = paramCountry || country;

	const shuffledFacts: Fact[] = shuffle(dbFacts);
	facts.set(shuffledFacts);

	const isCountryKnown = Object.keys(countries).includes(country);
	const formattedCountry = countries[country as Country];

	$: if (browser) goto(`/?country=${currentCountry}`, { keepFocus: true, invalidateAll: true });
</script>

<section class="flex flex-col items-center gap-12">
	<h1 class="text-5xl font-bold text-center">Welcome to What The Fact 👋</h1>

	{#if isCountryKnown}
		<p>We detected you're in {formattedCountry}</p>
	{/if}

	<form>
		<select bind:value={currentCountry}>
			<option value="PT" selected={currentCountry === 'PT'}>Portugal</option>
			<option value="FR" selected={currentCountry === 'FR'}>France</option>
			<!-- <option value="US" selected={currentCountry === 'US'}>USA</option> -->
		</select>
	</form>

	<NavigationButton href={`/${$facts[0].id}`}>start</NavigationButton>
</section>
