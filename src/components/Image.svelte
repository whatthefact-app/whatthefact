<script lang="ts">
	import { cn } from '../utils/cn';

	export let src: string;
	export let alt: string;
	export let className: string | undefined = undefined;
</script>

<img
	{src}
	alt={`${alt} cover image`}
	class={cn('h-48 w-full scale-[101%] object-cover object-center', className)}
/>
