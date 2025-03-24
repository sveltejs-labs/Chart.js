<script lang="ts">
	import Chart from '$lib/components/Chart.svelte';

	let {
		data,
		options = undefined,
		updateMode = undefined,
		plugins = undefined,
		id = undefined,
		width = undefined,
		height = undefined,
		'aria-label': ariaLabel = undefined,
		role = undefined
	}: ChartProps = $props();
</script>

<Chart
	type="bar"
	{data}
	{options}
	{updateMode}
	{plugins}
	{id}
	{width}
	{height}
	aria-label={ariaLabel}
	{role}
/>
