<script lang="ts">
	import NavigationButton from '../../../components/NavigationButton.svelte';
	import Section from '../../../components/Section.svelte';
	import SectionHeading from '../../../components/SectionHeading.svelte';
	import type { PageData } from './$types';
	import { facts } from '../../../stores/facts';
	import peacock from '$lib/assets/images/peacock.svg';
	import snail from '$lib/assets/images/snail.svg';
	import Image from '../../../components/Image.svelte';
	import { goto } from '$app/navigation';

	export let data: PageData;
	const { fact, query } = data;

	const hasFinishedRouned = $facts.length % 5 === 0;

	const isCorrect = query === 'y';
	const isShared = query !== 'y' && query !== 'n';

	$: if (copied)
		setTimeout(() => {
			copied = false;
		}, 2000);

	let copied = false;

	function handleCopy() {
		navigator.clipboard.writeText(`https://WhatTheFact.app/${fact.id}/a`);
		copied = true;
	}

	function handleNext(url: string) {
		facts.set($facts.slice(1));
		goto(url);
	}
</script>

<Section className="gap-10 py-10 bg-white h-full">
	<header class="flex flex-col items-center gap-4">
		{#if !isShared}
			<div class="h-20">
				<img
					src={isCorrect ? peacock : snail}
					alt={isCorrect ? 'Peacock' : 'Snail'}
					class="h-full w-full"
				/>
			</div>
		{:else}
			<div class="flex flex-col gap-4">
				<SectionHeading className="text-[32px]"
					>What the <span class="text-purple-500"> fact?! </span></SectionHeading
				>

				<p class="text-center text-lg">{fact.question}</p>

				<h3 class="text-center font-heading text-[27px] font-bold">{fact.answer1}</h3>
			</div>
		{/if}

		{#if !isShared}
			<div class="flex flex-col gap-4">
				<h2 class="px-10 text-center font-heading text-3xl text-heading leading-none">
					{isCorrect ? 'Nailed it!' : 'Mmh nope...'}
				</h2>

				<SectionHeading className="my-0">"{fact.answer1}" is the right answer</SectionHeading>
			</div>
		{/if}
	</header>

	{#if fact.fun_fact_image_url}
		<div class="w-full overflow-hidden rounded-[40px]">
			<Image src={fact.fun_fact_image_url} alt="Fun fact image" />
		</div>
	{/if}

	<p class="text-lg leading-7">{fact.fun_fact}</p>

	<div class="flex w-full flex-col items-center gap-4">
		{#if !isShared}
			<NavigationButton className="bg-background" on:click={handleCopy}
				>{copied ? 'URL COPIED!' : 'Share fact!'}</NavigationButton
			>
			{#if hasFinishedRouned}
				<NavigationButton on:click={() => handleNext('/success')}>Let's keep going</NavigationButton
				>
			{:else}
				<NavigationButton on:click={() => handleNext(`/${$facts[1].id}`)}>Next</NavigationButton>
			{/if}
		{:else}
			<NavigationButton href="/">Take the quiz!</NavigationButton>
		{/if}
	</div>
</Section>
