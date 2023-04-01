<script lang="ts">
	import type { PageData } from './$types';
	import NavigationButton from '../components/NavigationButton.svelte';
	import { facts } from '../stores/facts';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import beetle from '$lib/assets/images/beetle.svg';
	import PageHeading from '../components/PageHeading.svelte';
	import { countries } from '../constants/constants';
	import Section from '../components/Section.svelte';

	export let data: PageData;

	let currentCountry: string;
	let paramCountry = $page.url.searchParams.get('country');

	currentCountry = paramCountry || data.country;

	$: facts.set(data.facts);

	$: if (browser) goto(`/?country=${currentCountry}`, { keepFocus: true, invalidateAll: true });
</script>

<Section className="gap-8 pt-16">
	<PageHeading>Test your knowledge about nature around you.</PageHeading>

	<img src={beetle} alt="Beetle" />

	<p>You're playing in</p>

	<select
		bind:value={currentCountry}
		class="grid h-[68px] w-full place-items-center rounded-[29px] bg-white px-6 py-3 font-heading text-[1.6875rem] font-extrabold text-black"
	>
		<option value="PT" selected={currentCountry === 'PT'}>{countries.PT}</option>
		<option value="FR" selected={currentCountry === 'FR'}>{countries.FR}</option>
		<option value="US" selected={currentCountry === 'US'}>{countries.US}</option>
		<option value="AU" selected={currentCountry === 'AU'}>{countries.AU}</option>
		<option value="BR" selected={currentCountry === 'BR'}>{countries.BR}</option>
	</select>

	<NavigationButton href={`/${$facts[0].id}`}>Play</NavigationButton>
</Section>
