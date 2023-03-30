<script lang="ts">
	export let href: string;
</script>

<a {href} class="text-xl bg-slate-900 text-white px-5 py-2 rounded-md">
	<slot />
</a>
