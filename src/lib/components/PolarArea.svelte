<script lang="ts">
	import type { Snapshot } from './$types';

	import Chart from 'chart.js/auto';
	import type { ChartData, ChartOptions, UpdateMode } from 'chart.js';

	let {
		data,
		options = undefined,
		updateMode = undefined,
		id = undefined,
		width = undefined,
		height = undefined,
		ariaLabel = undefined,
		role = undefined
	}: {
		data: ChartData;
		options?: ChartOptions | undefined;
		updateMode?: UpdateMode | undefined;
		id?: string | undefined;
		width?: number | string | undefined;
		height?: number | string | undefined;
		ariaLabel?: string | undefined;
		role?: string | undefined;
	} = $props();

	let chartObject: Chart | null = null;

	function chart(
		node: HTMLCanvasElement,
		[_data, _options, _updateMode]: [
			Snapshot<ChartData>,
			Snapshot<ChartOptions>,
			Snapshot<UpdateMode>
		]
	) {
		function setupChart() {
			chartObject = new Chart(node, {
				type: 'polarArea',
				data: _data,
				options: _options
			});
		}
		setupChart();
		return {
			update() {
				chartObject?.update(_updateMode);
			},
			destroy() {
				chartObject?.destroy();
			}
		};
	}
</script>

<canvas
	use:chart={[$state.snapshot(data), $state.snapshot(options), $state.snapshot(updateMode)]}
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
