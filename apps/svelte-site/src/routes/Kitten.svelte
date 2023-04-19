<script>
	export let src = 'https://res.cloudinary.com/demo/image/upload/kitten_fighting.gif';
	export let name = 'white cat grabbing grass';
</script>

<section>
	<h2>{name}</h2>

	<div class="images">
		<img {src} alt={name} />

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
	</div>
</section>

<style>
	h2 {
		color: steelblue;
	}
	section {
		display: flex;
		flex-direction: column;
	}
	.images {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}
	img {
		max-width: 250px;
	}
</style>
