<script lang="ts">
	import { page } from '$app/stores';
	import Image from '../../components/Image.svelte';
	import Toggle from '../../components/Toggle.svelte';
	import Section from '../../components/Section.svelte';
	import SectionHeading from '../../components/SectionHeading.svelte';
	import { MAX_FACTS_PER_ROUND } from '../../constants/constants';
	import { facts } from '../../stores/facts';
	import { shuffle } from '../../utils/shuffle';
	import type { Fact } from '../../types/types';
	import NavigationButton from '../../components/NavigationButton.svelte';
	import { goto } from '$app/navigation';

	const { params } = $page;

	const { question, answer1, answer2, answer3, answer4, question_image_url } = $facts[0];
	const proposals = shuffle([answer1, answer2, answer3, answer4]);

	type Answer = Fact['answer1'];

	let selectedProposal: Answer | null = null;

	function handleSelect(proposal: Answer) {
		selectedProposal = proposal;
	}

	function handleSubmit() {
		const isCorrect = selectedProposal === answer1;
		goto(`/${params.fact}/a?c=${isCorrect ? 'y' : 'n'}`);
	}
</script>

{#if question_image_url}
	<div class="relative overflow-hidden rounded-b-[40px]">
		<Image src={question_image_url} alt={`${question} cover image`} />

		<div
			class="absolute bottom-6 left-6 mt-6 rounded-xl bg-white px-3 font-heading text-[1.3125rem] font-semibold"
		>
			{MAX_FACTS_PER_ROUND - $facts.length + 1} / {MAX_FACTS_PER_ROUND}
		</div>
	</div>
{/if}

<Section>
	{#if !question_image_url}
		<div class="mt-6 rounded-xl bg-white px-3 font-heading text-[1.3125rem] font-semibold">
			{MAX_FACTS_PER_ROUND - $facts.length + 1} / {MAX_FACTS_PER_ROUND}
		</div>
	{/if}

	<SectionHeading>{question}</SectionHeading>

	<ul class="flex w-full flex-col items-start gap-4">
		{#each proposals as proposal}
			<li class="w-full">
				<Toggle on:click={() => handleSelect(proposal)} {proposal} {selectedProposal} />
			</li>
		{/each}
	</ul>

	{#if selectedProposal}
		<NavigationButton on:click={handleSubmit}>Go for it!</NavigationButton>
	{/if}
</Section>
