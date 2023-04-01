<script lang="ts">
	import type { PageData } from './$types';
	import NavigationButton from '../components/NavigationButton.svelte';
	import { facts } from '../stores/facts';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import beetle from '$lib/assets/images/beetle.png';
	import dino from '$lib/assets/images/dino.png';
	import fish from '$lib/assets/images/fish.png';
	import flower from '$lib/assets/images/flower.png';
	import gendarme from '$lib/assets/images/gendarme.png';
	import parrot from '$lib/assets/images/parrot.png';
	import peacock from '$lib/assets/images/peacock.png';
	import shell from '$lib/assets/images/shell.png';
	import snail from '$lib/assets/images/snail.png';
	import tree from '$lib/assets/images/tree.png';
	import whale from '$lib/assets/images/whale.png';

	import PageHeading from '../components/PageHeading.svelte';
	import { countries } from '../constants/constants';
	import Section from '../components/Section.svelte';

	export let data: PageData;

	let image: string | null;
	let images = [beetle, dino, fish, flower, gendarme, parrot, peacock, shell, snail, tree, whale];

	const getRandomImage = () => {
		const randomIndex = Math.floor(Math.random() * images.length);
		return images[randomIndex];
	};

	// get a new random image every 1 second
	$: setInterval(() => {
		image = getRandomImage();
	}, 750);

	let currentCountry: string;
	let paramCountry = $page.url.searchParams.get('country');

	currentCountry = paramCountry || data.country;

	$: facts.set(data.facts);

	$: if (browser) goto(`/?country=${currentCountry}`, { keepFocus: true, invalidateAll: true });
</script>

<Section className="gap-8 pt-16">
	<!-- <div>
		<h1 class="mt-16 font-heading text-7xl font-black leading-none sm:mt-24">
			What<br />the<br /><span class="text-purple-500">fact?!</span>
		</h1>

		<img src={beetle} alt="Beetle" class="mt-16 h-44" />
	</div> -->

	<PageHeading>Test your knowledge about nature around you.</PageHeading>

	<div class="h-28">
		{#if image}
			<img src={image} alt="Beetle" class="h-28" />
		{/if}
	</div>

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
