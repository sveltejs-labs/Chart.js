<script lang="ts">
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';
	import type { ChartData, ChartOptions, UpdateMode } from 'chart.js';

	let chartContainer: HTMLCanvasElement | null = null;

	let {
		data,
		options,
		updateMode
	}: { data: ChartData; options: ChartOptions | undefined; updateMode: UpdateMode | undefined } =
		$props();

	let chart: Chart | null = null;

	$effect(() => {
		if (chart) {
			chart.data = data;
			if (options) {
				chart.options = options;
			}
			chart.update(updateMode);
		}
	});

	onMount(() => {
		if (chartContainer) {
			// Initialize the chart
			chart = new Chart(chartContainer, {
				type: 'radar',
				data: data,
				options: options
			});

			return () => {
				chart?.destroy();
			};
		}
	});
</script>

<canvas bind:this={chartContainer}></canvas>

<style>
	canvas {
		max-width: 100%;
	}
</style>
