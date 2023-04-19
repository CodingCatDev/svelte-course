<script lang="ts">
	import Kitten from './Kitten.svelte';

	export let src = 'https://res.cloudinary.com/demo/image/upload/kitten_fighting.gif';
	export let name = 'white cat grabbing grass';

	const getKittens = async () => {
		const res = await fetch('https://api.thecatapi.com/v1/images/asearch?limit=10');
		const kittenJson = await res.json();
		return kittenJson.map((k: any) => {
			return { src: k.url, name: k.id };
		});
	};

	const selectKitten = (newSrc: string, newAlt: string) => {
		src = newSrc;
		name = newAlt;
	};
</script>

<h2>Kitten Picker</h2>

<div class="buttons">
	{#await getKittens()}
		Getting Kittens...
	{:then kittens}
		{#each kittens as { src, name }}
			<button on:click={() => selectKitten(src, name)}>
				{name}
			</button>
		{/each}
	{:catch error}
		<div class="error">
			{error}
		</div>
	{/await}
</div>

<Kitten {src} {name} />

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
