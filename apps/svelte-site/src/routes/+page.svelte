<script lang="ts">
	import CatText from './CatText.svelte';
	import KittenCuteList from './KittenCuteList.svelte';
	import KittenPicker from './KittenPicker.svelte';

	let displayCuteList = false;
	let displayCatText = false;
</script>

<h1>All These Cats</h1>

<h2>The Cat Picker App</h2>

<button on:click={() => (displayCuteList = !displayCuteList)}>Swap</button>
<button on:click={() => (displayCatText = !displayCatText)}>Display Cat Text</button>
{#if displayCatText}
	<CatText />
{:else if displayCuteList}
	<KittenCuteList />
{:else}
	<KittenPicker />
{/if}

<style>
	:global(h2) {
		margin: 0;
	}
</style>
