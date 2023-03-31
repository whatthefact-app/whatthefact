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

	// 3 routes
	// /
	// /[slug]
	// /[slug]/a/[answer_index]
	// /[slug]/share
</script>

<Section>
	<SectionHeading>{question}</SectionHeading>

	<ol class="list-decimal">
		{#each proposals as proposal}
			<li>
				<a href={getNextStep({ proposal, answer: answer1 })}>{proposal}</a>
			</li>
		{/each}
	</ol>
</Section>
