<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import Section from '../../components/Section.svelte';
	import SectionHeading from '../../components/SectionHeading.svelte';

	const { params } = $page;

	export let data: PageData;
	const { fact } = data;

	console.log('page', $page.params);
</script>

<Section>
	<SectionHeading>{fact.question}</SectionHeading>

	<ol class="list-decimal">
		{#each fact.answers as answer}
			<li>
				<a href={`/${params.fact}/answer`}>{answer}</a>
			</li>
		{/each}
	</ol>
</Section>
