<script lang="ts">
	import { cn } from '../utils/cn';

	export let href: string | undefined = undefined;
	export let className: string | undefined = undefined;
</script>

{#if href}
	<a
		{href}
		class={cn(
			'relative z-10 grid h-[68px] w-full place-items-center rounded-[29px] bg-brand px-8 font-heading text-[1.6875rem] font-extrabold text-black',
			className
		)}
	>
		<slot />

		<!-- <div class="absolute inset-0 z-0 translate-y-1 rounded-[29px] bg-gray-300" /> -->
	</a>
{:else}
	<button
		on:click
		class={cn(
			'relative z-10 grid h-[68px] w-full place-items-center rounded-[29px] bg-brand px-8 font-heading text-[1.6875rem] font-extrabold text-black',
			className
		)}
	>
		<slot />
	</button>
{/if}
