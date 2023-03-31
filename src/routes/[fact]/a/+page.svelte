<script lang="ts">
	import { page } from '$app/stores';
	import NavigationButton from '../../../components/NavigationButton.svelte';
	import Section from '../../../components/Section.svelte';
	import SectionHeading from '../../../components/SectionHeading.svelte';
	import { cn } from '../../../utils/cn';
	import type { PageData } from './$types';
	import { facts } from '../../../stores/facts';

	export let data: PageData;
	const { fact, query } = data;

	const nextFact = $facts[1];
	facts.set($facts.slice(1));
	const isCorrect = query === 'y';
</script>

<Section>
	<SectionHeading>that's the answer</SectionHeading>

	<p class={cn(isCorrect ? 'text-green-500' : 'text-red-500')}>
		{isCorrect ? 'correct' : 'wrong'}
	</p>

	<p>{fact.answer1}</p>

	<p>{fact.fun_fact}</p>

	{#if nextFact}
		<NavigationButton href={`/${nextFact.id}`}>continue</NavigationButton>
	{:else}
		<NavigationButton href="/share">finish</NavigationButton>
	{/if}
</Section>
