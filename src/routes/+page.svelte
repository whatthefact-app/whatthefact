<script lang="ts">
	import type { PageData } from './$types';
	import NavigationButton from '../components/NavigationButton.svelte';
	import { facts } from '../stores/facts';
	import { shuffle } from '../utils/shuffle';

	export let data: PageData;

	const shuffledFacts = shuffle(data.facts);
	facts.set(shuffledFacts);
</script>

<section class="flex flex-col items-center gap-12">
	<h1 class="text-5xl font-bold text-center">Welcome to What The Fact 👋</h1>

	<NavigationButton href={`/${shuffledFacts[0].slug}`}>start</NavigationButton>
</section>
