<script lang="ts">
	import { flip } from 'svelte/animate';
	import { crossfade } from 'svelte/transition';
	import { kittensStore, type KittenType } from './stores';

	const toggleSuperCute = (kitten: KittenType, kittens: KittenType[]) => {
		const i = kittens.findIndex((k) => k.name === kitten.name);
		kittens[i].supercute = !kittens[i].supercute;
		kittensStore.set([...kittens]);
	};

	const [send, receive] = crossfade({
		duration: (d) => Math.sqrt(d * 200)
	});

	import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';

	onMount(() => {
		console.log('mounted');
	});

	beforeUpdate(() => {
		console.log('beforeUpdate');
	});
	afterUpdate(() => {
		console.log('afterUpdate');
	});
	onDestroy(() => {
		console.log('onDestroy');
	});
</script>

<h2>Kitten Cuteness Picker</h2>

{#await $kittensStore}
	Getting Kittens...
{:then kittens}
	<h3>All kittens</h3>
	<section class="cutekittens">
		{#each kittens.filter((a) => a.supercute === false) as kitten (kitten.name)}
			<button
				class="cutekitten"
				style={`background-image: url(${kitten.src})`}
				on:click={() => toggleSuperCute(kitten, kittens)}
				animate:flip
				in:receive={{ key: kitten.name }}
				out:send={{ key: kitten.name }}
			/>
		{/each}
	</section>

	<h3>Super Cute Kittens</h3>
	<section class="cutekittens">
		{#each kittens.filter((a) => a.supercute === true) as kitten (kitten.name)}
			<button
				class="cutekitten"
				style={`background-image: url(${kitten.src})`}
				on:click={() => toggleSuperCute(kitten, kittens)}
				animate:flip
				in:receive={{ key: kitten.name }}
				out:send={{ key: kitten.name }}
			/>
		{/each}
	</section>
{:catch error}
	<div class="error">
		{error}
	</div>
{/await}

<style>
	h2 {
		color: slategray;
	}
	.error {
		background-color: red;
	}
	.cutekittens {
		display: flex;
		flex-wrap: wrap;
	}
	.cutekitten {
		width: 5rem;
		height: 5rem;
		overflow: hidden;
		background-size: cover;
	}
</style>
