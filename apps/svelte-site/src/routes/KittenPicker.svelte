<script lang="ts">
	import Kitten from './Kitten.svelte';

	export let src = 'https://res.cloudinary.com/demo/image/upload/kitten_fighting.gif';
	export let name = 'white cat grabbing grass';

	let kittens: { src: string; name: string }[] = [];

	const getKittens = async () => {
		const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
		const kittenJson = await res.json();
		kittens = kittenJson.map((k: any) => {
			return { src: k.url, name: k.id };
		});
	};

	const selectKitten = (newSrc: string, newAlt: string) => {
		src = newSrc;
		name = newAlt;
	};
</script>

<h2>Kitten Picker</h2>
<button on:click={getKittens}>Get Kittens</button>

<div class="buttons">
	{#each kittens as { src, name }}
		<button on:click={() => selectKitten(src, name)}>
			{name}
		</button>
	{/each}
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
</style>
