<script lang="ts">
	import { cn } from '../utils/cn';

	export let className: string | undefined = undefined;
</script>

<section class={cn('flex flex-col items-center gap-6 bg-background px-6', className)}>
	<slot />
</section>
