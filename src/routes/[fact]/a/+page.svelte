<script lang="ts">
	import NavigationButton from '../../../components/NavigationButton.svelte';
	import Section from '../../../components/Section.svelte';
	import SectionHeading from '../../../components/SectionHeading.svelte';
	import type { PageData } from './$types';
	import { facts } from '../../../stores/facts';
	import peacock from '$lib/assets/images/peacock.svg';
	import snail from '$lib/assets/images/snail.svg';
	import Image from '../../../components/Image.svelte';

	export let data: PageData;
	const { fact, query } = data;

	const nextFact = $facts[1];
	facts.set($facts.slice(1));
	const isCorrect = query === 'y';
	const isShared = query !== 'y' && query !== 'n';

	// reset copied after 2 seconds
	$: if (copied)
		setTimeout(() => {
			copied = false;
		}, 2000);

	let copied = false;

	function handleCopy() {
		console.log('first');
		navigator.clipboard.writeText(`https://WhatTheFact.app/${fact.id}/a`);
		copied = true;
	}
</script>

<Section className="gap-10 py-10 bg-white h-full">
	<header class="flex flex-col items-center gap-4">
		{#if !isShared}
			<img src={isCorrect ? peacock : snail} alt={isCorrect ? 'Peacock' : 'Snail'} />
		{/if}

		<div>
			{#if !isShared}
				<h2 class="px-10 text-center font-heading text-3xl text-heading leading-none">
					{isCorrect ? 'Nailed it!' : 'Mmh nope...'}
				</h2>
			{/if}

			<SectionHeading className="my-0">"{fact.answer1}" is the right answer</SectionHeading>
		</div>
	</header>

	<div class="h-48 w-full overflow-hidden rounded-[40px]">
		{#if fact.fun_fact_image_url}
			<Image src={fact.fun_fact_image_url} alt="Fun fact image" />
		{/if}
	</div>

	<p class="text-lg leading-7">{fact.fun_fact}</p>

	<div class="flex w-full flex-col items-center gap-4">
		{#if !isShared}
			<NavigationButton className="bg-background" on:click={handleCopy}
				>{copied ? 'Copied!' : 'Share fact!'}</NavigationButton
			>
			{#if nextFact}
				<NavigationButton href={`/${nextFact.id}`}>Next</NavigationButton>
			{:else}
				<NavigationButton href="/share">Finish</NavigationButton>
			{/if}
		{:else}
			<NavigationButton href="/">Take the quiz!</NavigationButton>
		{/if}
	</div>
</Section>
