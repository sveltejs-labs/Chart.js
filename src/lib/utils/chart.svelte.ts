import type { Action } from 'svelte/action';
import type { Snapshot } from './$types';
import type { ChartData, ChartOptions, ChartTypeRegistry, UpdateMode } from 'chart.js';
import Chart from 'chart.js/auto';

export const chart: Action<
	HTMLCanvasElement,
	[keyof ChartTypeRegistry, Snapshot<ChartData>, Snapshot<ChartOptions>, Snapshot<UpdateMode>]
> = (
	node: HTMLCanvasElement,
	[type, data, options, updateMode]: [
		keyof ChartTypeRegistry,
		Snapshot<ChartData>,
		Snapshot<ChartOptions>,
		Snapshot<UpdateMode>
	]
) => {
	const chartObject = new Chart(node, {
		type: type,
		data: data,
		options: options
	});

	$effect(() => {
		chartObject?.update(updateMode);
		return () => {
			chartObject?.destroy();
		};
	});
};

export default chart;
