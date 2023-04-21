<script lang="ts">
	import { tick } from 'svelte';

	let text = `Select some text and hit the tab key to toggle uppercase`;

	async function handleKeydown(event: { key: string; preventDefault: () => void }) {
		if (event.key !== 'Tab') return;

		event.preventDefault();
		//@ts-ignore
		const { selectionStart, selectionEnd, value } = this;
		const selection = value.slice(selectionStart, selectionEnd);

		const replacement = /[a-z]/.test(selection) ? selection.toUpperCase() : selection.toLowerCase();

		text = value.slice(0, selectionStart) + replacement + value.slice(selectionEnd);

		// this has no effect, because the DOM hasn't updated yet
		await tick();
		//@ts-ignore
		this.selectionStart = selectionStart;
		//@ts-ignore
		this.selectionEnd = selectionEnd;
	}
</script>

<textarea value={text} on:keydown={handleKeydown} />
