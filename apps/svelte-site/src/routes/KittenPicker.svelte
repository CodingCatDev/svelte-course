<script lang="ts">
	import Kitten from './Kitten.svelte';

	export let src = 'https://res.cloudinary.com/demo/image/upload/kitten_fighting.gif';
	export let name = 'white cat grabbing grass';

	const kittens = [
		{ src: 'https://30.media.tumblr.com/tumblr_lh6z3xIiOK1qfyzelo1_250.jpg', name: 'Kitten A' },
		{ src: 'https://30.media.tumblr.com/tumblr_m2r4mywnlj1qhwmnpo1_250.jpg', name: 'Kitten B' },
		{ src: 'https://30.media.tumblr.com/tumblr_m3d2zsJr9Y1qe9f3eo1_250.jpg', name: 'Kitten C' },
		{ src: 'https://30.media.tumblr.com/tumblr_lkpce8jzf91qcxyrro1_250.jpg', name: 'Kitten D' }
	];

	const selectKitten = (newSrc: string, newAlt: string) => {
		src = newSrc;
		name = newAlt;
	};
</script>

<div>
	{#each kittens as { src, name }, i}
		<button on:click={() => selectKitten(src, name)}>
			{i}-{name}
		</button>
	{/each}
</div>

<Kitten {src} {name} />
