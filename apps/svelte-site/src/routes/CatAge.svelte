<script lang="ts">
	let age = 0;
	let ages: { age: number; calculatedAge: number }[] = [];

	$: ages = [...ages, { age, calculatedAge }];

	$: calculatedAge = age < 1 ? 0 : age * 6;
	$: if (age < 0) {
		alert(`your cat isn't born yet?`);
	}
</script>

<input type="number" bind:value={age} />
<p>{calculatedAge}</p>

<ul>
	{#each ages as a}
		<li>{`${a.age}-${a.calculatedAge}`}</li>
	{/each}
</ul>
