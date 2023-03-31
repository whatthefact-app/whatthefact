<script lang="ts">
	export let href: string;
</script>

<a
	{href}
	class="grid h-[68px] w-full max-w-xs place-items-center rounded-[29px] bg-brand px-8 font-heading text-[1.6875rem] font-extrabold text-black"
>
	<slot />
</a>
