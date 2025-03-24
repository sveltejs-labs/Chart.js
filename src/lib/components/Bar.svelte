<script lang="ts">
	import chart from '$lib/utils/chart.svelte';

	let {
		data,
		options = undefined,
		updateMode = undefined,
		plugins = undefined,
		id = undefined,
		width = undefined,
		height = undefined,
		ariaLabel = undefined,
		role = undefined
	}: ChartProps = $props();
</script>

{#key [data, options, updateMode]}
	<canvas
		use:chart={{
			type: 'bar',
			data: $state.snapshot(data),
			options: $state.snapshot(options),
			updateMode: $state.snapshot(updateMode),
			plugins: $state.snapshot(plugins)
		}}
		{id}
		{width}
		{height}
		aria-label={ariaLabel}
		{role}
	></canvas>
{/key}

<style>
	canvas {
		max-width: 100%;
	}
</style>
