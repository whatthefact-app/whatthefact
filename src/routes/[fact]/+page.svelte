<script lang="ts">
	import { page } from '$app/stores';
	import Section from '../../components/Section.svelte';
	import SectionHeading from '../../components/SectionHeading.svelte';
	import { facts } from '../../stores/facts';
	import { shuffle } from '../../utils/shuffle';

	const { params } = $page;

	const { question, answer1, answer2, answer3, answer4 } = $facts[0];
	const proposals = shuffle([answer1, answer2, answer3, answer4]);

	function getNextStep({ proposal, answer }: { proposal: string; answer: string }) {
		return proposal === answer ? `/${params.fact}/a?c=y` : `/${params.fact}/a?c=n`;
	}
</script>

<Section>
	<div class="mt-6 rounded-xl bg-white px-3 font-heading text-[1.3125rem] font-semibold">1/5</div>

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
