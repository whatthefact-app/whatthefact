<script lang="ts">
	import { page } from '$app/stores';
	import Section from '../../../components/Section.svelte';
	import SectionHeading from '../../../components/SectionHeading.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { fact } = data;

	console.log('page', $page);
</script>

<Section>
	<SectionHeading>that's the answer</SectionHeading>

	<p>{fact.answers[0]}</p>
</Section>
