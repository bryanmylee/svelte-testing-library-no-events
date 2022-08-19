<script lang="ts">
	let open = false;
</script>

<button
	on:click={() => {
		console.log('HELLO');
		open = true;
	}}>Try me</button
>

{#if open}
	<h1>Hello</h1>
{/if}
