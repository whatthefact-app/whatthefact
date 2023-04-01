<script lang="ts">
	import { cn } from '../utils/cn';

	export let className: string | undefined = undefined;
</script>

<h1 class={cn('mt-6 text-center font-heading text-[1.6875rem] font-bold leading-none', className)}>
	<slot />
</h1>
