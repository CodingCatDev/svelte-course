<script lang="ts">
	import Kitten from './Kitten.svelte';
	import { kittensStore, kittenSelected, type KittenType } from './stores';

	const selectKitten = (name: string) => {
		const u = kittensStore.subscribe((kittens) => {
			const selectedKitten = kittens.filter((kitten) => kitten.name === name)?.at(0);
			kittenSelected.set(selectedKitten);
		});
		u();
	};
</script>

<h2>Kitten Picker</h2>

<div class="buttons">
	{#await $kittensStore}
		Getting Kittens...
	{:then kittens}
		{#each kittens as { src, name }}
			<button on:click={() => selectKitten(name)}>
				{name}
			</button>
		{/each}
	{:catch error}
		<div class="error">
			{error}
		</div>
	{/await}
</div>

{#if $kittenSelected}
	<Kitten src={$kittenSelected.src} name={$kittenSelected.name} />
{/if}

<style>
	h2 {
		color: slategray;
	}
	.buttons {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
		flex-wrap: wrap;
	}
	.error {
		background-color: red;
	}
</style>
