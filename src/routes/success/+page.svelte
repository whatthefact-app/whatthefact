<script lang="ts">
	import Section from '../../components/Section.svelte';
	import whale from '$lib/assets/images/whale.png';
	import SectionHeading from '../../components/SectionHeading.svelte';
	import NavigationButton from '../../components/NavigationButton.svelte';
	import { facts } from '../../stores/facts';
	import confetti from 'canvas-confetti';
	import { onMount } from 'svelte';

	const triggerConf = () => {
		confetti({
			zIndex: 999,
			particleCount: 300,
			spread: 150,
			origin: {
				x: Math.random(),
				y: Math.random() - 0.2
			}
		});
	};

	onMount(() => {
		setTimeout(() => {
			triggerConf();
			triggerConf();
		}, 250);

		setTimeout(() => {
			triggerConf();
			triggerConf();
		}, 500);

		setTimeout(() => {
			triggerConf();
			triggerConf();
		}, 1500);
	});

	let copied = false;

	function handleCopy() {
		navigator.clipboard.writeText('https://WhatTheFact.app');
		copied = true;
	}
</script>

<Section className="py-10 gap-16 bg-white">
	<header class="flex flex-col items-center gap-4">
		<SectionHeading className="my-0 font-bold text-center text-[40px]">Awesome!</SectionHeading>

		<h2 class="text-center font-heading text-[27px] font-bold leading-none">
			Knowledge is power,<br /> keep it going
		</h2>
	</header>

	<div class="h-36">
		<img src={whale} alt="Whale" class="h-36" />
	</div>

	<div class="flex w-full flex-col gap-4">
		<p class="text-center text-lg">If you wanna learn more, hit the button for another five!</p>
		<NavigationButton href={!!$facts[1] ? `/${$facts[1].id}` : '/'}
			>Give me five 🖐️</NavigationButton
		>
		<NavigationButton on:click={handleCopy} className="bg-background"
			>{copied ? 'URL COPIED!' : 'Share quiz'}</NavigationButton
		>
	</div>

	<div />
</Section>
