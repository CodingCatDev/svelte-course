<script lang="ts">
	import { onMount } from 'svelte';
	import CatText from './CatText.svelte';
	import KittenCuteList from './KittenCuteList.svelte';
	import KittenPicker from './KittenPicker.svelte';
	import { kittensStore } from './stores';

	let displayCuteList = false;
	let displayCatText = false;

	const getKittens = async () => {
		const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
		const kittenJson = await res.json();
		kittensStore.set(
			kittenJson.map((k: any, i: number) => {
				return { src: k.url, name: k.id, supercute: false };
			})
		);
	};

	onMount(async () => {
		getKittens();
	});
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
