<script lang="ts">
	import KittenPicker from './KittenPicker.svelte';

	const handlemessage = (event: { detail: { name: any } }) => {
		alert(event.detail.name);
	};

	const handleClick = () => {
		alert('clicked C');
	};
</script>

<KittenPicker on:click={handleClick} />
