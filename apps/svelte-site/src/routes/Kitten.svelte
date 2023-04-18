<script>
	export let src = 'https://res.cloudinary.com/demo/image/upload/kitten_fighting.gif';
	export let name = 'white cat grabbing grass';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	$: {
		dispatch('message', {
			src,
			name
		});
	}
</script>

<img {src} alt={name} />

<p>{name}</p>

<style>
	p {
		color: #5e1286;
		background-color: white;
	}
</style>
