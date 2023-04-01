<script lang="ts">
	import { cn } from '../utils/cn';

	export let proposal: string;
	export let selectedProposal: string | null;

	$: active = proposal === selectedProposal;
</script>

<button
	class={cn(
		'flex w-full rounded-[20px] border-2 border-transparent bg-white px-6 py-5 text-base font-normal transition-colors duration-300',
		active && 'border-purple-300 font-bold'
	)}
	on:click
	>{proposal}
</button>
