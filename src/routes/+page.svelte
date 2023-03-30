<script lang="ts">
	import type { PageData } from './$types';
	import { facts } from '../stores/facts';
	import NavigationButton from '../components/NavigationButton.svelte';

	export let data: PageData;

	// on mount, set the facts store to the data from the API
	facts.set(data.facts);

	$: console.log('facts', $facts);
</script>

<section class="flex flex-col items-center gap-12">
	<h1 class="text-5xl font-bold text-center">Welcome to What The Fact 👋</h1>

	<NavigationButton href={`/${data.facts[0].slug}`}>start</NavigationButton>
</section>
