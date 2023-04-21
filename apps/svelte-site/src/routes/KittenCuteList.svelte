<script lang="ts">
	import { flip } from 'svelte/animate';
	import { crossfade } from 'svelte/transition';

	interface Kitten {
		src: string;
		name: string;
		supercute: boolean;
	}
	let kittens: Kitten[] = [];
	const getKittens = async (): Promise<Kitten[]> => {
		const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
		const kittenJson = await res.json();
		kittens = kittenJson.map((k: any, i: number) => {
			return { src: k.url, name: k.id, supercute: false };
		});
		return kittens;
	};
	const toggleSuperCute = (kitten: Kitten) => {
		const i = kittens.findIndex((k) => k.name === kitten.name);
		kittens[i].supercute = !kittens[i].supercute;
		kittens = [...kittens];
	};

	const [send, receive] = crossfade({
		duration: (d) => Math.sqrt(d * 200)
	});
</script>

<h2>Kitten Cuteness Picker</h2>

{#await getKittens()}
	Getting Kittens...
{:then}
	<h3>All kittens</h3>
	<section class="cutekittens">
		{#each kittens.filter((a) => a.supercute === false) as kitten (kitten.name)}
			<button
				class="cutekitten"
				style={`background-image: url(${kitten.src})`}
				on:click={() => toggleSuperCute(kitten)}
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
				on:click={() => toggleSuperCute(kitten)}
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
