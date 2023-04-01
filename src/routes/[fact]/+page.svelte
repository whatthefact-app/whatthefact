<script lang="ts">
	import { page } from '$app/stores';
	import Image from '../../components/Image.svelte';
	import Section from '../../components/Section.svelte';
	import SectionHeading from '../../components/SectionHeading.svelte';
	import { MAX_FACTS_PER_ROUND } from '../../constants/constants';
	import { facts } from '../../stores/facts';
	import { shuffle } from '../../utils/shuffle';

	const { params } = $page;

	const { question, answer1, answer2, answer3, answer4, question_image_url } = $facts[0];
	const proposals = shuffle([answer1, answer2, answer3, answer4]);

	function getNextStep({ proposal, answer }: { proposal: string; answer: string }) {
		return proposal === answer ? `/${params.fact}/a?c=y` : `/${params.fact}/a?c=n`;
	}

	$: console.log('question_image_url', question_image_url);
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
				<a
					class="flex grow rounded-[20px] bg-white px-6 py-5 text-base"
					href={getNextStep({ proposal, answer: answer1 })}>{proposal}</a
				>
			</li>
		{/each}
	</ul>
</Section>
