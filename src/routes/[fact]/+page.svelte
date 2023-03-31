<script lang="ts">
	import { page } from '$app/stores';
	import Section from '../../components/Section.svelte';
	import SectionHeading from '../../components/SectionHeading.svelte';
	import { facts } from '../../stores/facts';
	import { shuffle } from '../../utils/shuffle';

	const { params } = $page;

	const fact = $facts[0];
	const proposals = shuffle([...fact.answers]);
	const correctAnswer = fact.answers[0];

	function getNextStep({ proposal, answer }: { proposal: string; answer: string }) {
		return proposal === answer ? `/${params.fact}/a?c=y` : `/${params.fact}/a?c=n`;
	}
</script>

<Section>
	<SectionHeading>{fact.question}</SectionHeading>

	<ol class="list-decimal">
		{#each proposals as proposal}
			<li>
				<a href={getNextStep({ proposal, answer: correctAnswer })}>{proposal}</a>
			</li>
		{/each}
	</ol>
</Section>
