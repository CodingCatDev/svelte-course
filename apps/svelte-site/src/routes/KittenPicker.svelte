<script lang="ts">
	import Kitten from './Kitten.svelte';

	export let src = 'https://res.cloudinary.com/demo/image/upload/kitten_fighting.gif';
	export let name = 'white cat grabbing grass';

	const selectKitten = (newSrc: string, newAlt: string) => {
		src = newSrc;
		name = newAlt;
	};
</script>

<div>
	<button
		on:click={() =>
			selectKitten('https://30.media.tumblr.com/tumblr_lh6z3xIiOK1qfyzelo1_250.jpg', 'Kitten A')}
		>Kitten A</button
	>
	<button
		on:click={() =>
			selectKitten('https://30.media.tumblr.com/tumblr_m2r4mywnlj1qhwmnpo1_250.jpg', 'Kitten B')}
	>
		Kitten B
	</button>
	<button
		on:click
		on:click={() =>
			selectKitten('https://30.media.tumblr.com/tumblr_m3d2zsJr9Y1qe9f3eo1_250.jpg', 'Kitten C')}
	>
		Kitten C
	</button>
	<button
		on:click={() =>
			selectKitten('https://30.media.tumblr.com/tumblr_lkpce8jzf91qcxyrro1_250.jpg', 'Kitten D')}
	>
		Kitten D
	</button>
</div>

<Kitten {src} {name} on:message />
