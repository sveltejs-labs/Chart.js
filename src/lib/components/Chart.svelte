<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Chart, { registerables } from 'chart.js/auto';
	import type { ChartType } from 'chart.js/auto';
	import type { ChartData, ChartOptions } from 'chart.js';

	let {
		type,
		data,
		options = undefined,
		plugins = undefined,
		updateMode = undefined,
		id = undefined,
		width = undefined,
		height = undefined,
		'aria-label': ariaLabel = undefined,
		role = undefined
	}: { type: ChartType } & ChartProps = $props();

	let canvasRef: HTMLCanvasElement | null = $state(null);
	let chart: Chart | null = null;

	onMount(() => {
		Chart.register(...registerables);

		if (canvasRef) {
			chart = new Chart(canvasRef, {
				type,
				data: $state.snapshot(data) as ChartData,
				options: $state.snapshot(options) as ChartOptions,
				plugins
			});
		}
	});

	$effect(() => {
		if (!chart) return;

		chart.data = $state.snapshot(data) as ChartData;
		Object.assign(chart.options, $state.snapshot(options) as ChartOptions);
		chart.update(updateMode);
	});

	onDestroy(() => {
		if (chart) chart.destroy();
		chart = null;
	});
</script>

<canvas bind:this={canvasRef} {id} {width} {height} aria-label={ariaLabel} {role}></canvas>

<style>
	canvas {
		max-width: 100%;
	}
</style>
