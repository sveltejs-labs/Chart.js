<script lang="ts">
	import chart from '$lib/utils/chart.svelte';

	import type { ChartProps } from '$lib/utils/type';

	let {
		data,
		options = undefined,
		updateMode = undefined,
		id = undefined,
		width = undefined,
		height = undefined,
		ariaLabel = undefined,
		role = undefined
	}: ChartProps = $props();
</script>

<canvas
	use:chart={{
		type: 'scatter',
		data: $state.snapshot(data),
		options: $state.snapshot(options),
		updateMode: $state.snapshot(updateMode)
	}}
	{id}
	{width}
	{height}
	aria-label={ariaLabel}
	{role}
></canvas>

<style>
	canvas {
		max-width: 100%;
	}
</style>
