<script lang="ts">
	let copied = false;

	function handleCopy() {
		navigator.clipboard.writeText('https://WhatTheFact.app');
		copied = true;
	}
</script>

<h1>share!</h1>

<button on:click={handleCopy}>copy</button>

{#if copied}
	<p>copied</p>
{/if}
