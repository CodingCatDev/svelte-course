<script>
	export let src = 'https://res.cloudinary.com/demo/image/upload/kitten_fighting.gif';
	export let name = 'white cat grabbing grass';
</script>

<img {src} alt={name} />

<p>{name}</p>

{#if name === 'Kitten B'}
	<img
		src="https://media.codingcat.dev/image/upload/q_auto,f_auto,w_250,c_scale/main-codingcatdev-photo/xena-blackcatui.jpg"
		alt="Xena closing eyes black cat"
	/>
{:else if name === 'Kitten C'}
	<img
		src="https://media.codingcat.dev/image/upload/q_auto,f_auto,w_250,c_scale,a_180/main-codingcatdev-photo/xena-blackcatui.jpg"
		alt="Xena upside down"
	/>
{/if}

<style>
	p {
		color: #5e1286;
		background-color: white;
	}
</style>
