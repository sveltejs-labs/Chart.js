import type { Action } from 'svelte/action';
import type { Snapshot } from './$types';
import type { ChartData, ChartOptions, ChartTypeRegistry, UpdateMode } from 'chart.js';
import Chart from 'chart.js/auto';

export const chart: Action<
	HTMLCanvasElement,
	{
		type: keyof ChartTypeRegistry;
		data: Snapshot<ChartData>;
		options: Snapshot<ChartOptions>;
		updateMode: Snapshot<UpdateMode>;
	}
> = (
	node: HTMLCanvasElement,
	{
		type,
		data,
		options,
		updateMode
	}: {
		type: keyof ChartTypeRegistry;
		data: Snapshot<ChartData>;
		options: Snapshot<ChartOptions>;
		updateMode: Snapshot<UpdateMode>;
	}
) => {
	const chartObject = new Chart(node, {
		type: type,
		data: data,
		options: options
	});

	$effect(() => {
		chartObject.data = data;
		chartObject.options = options;
		chartObject.update(updateMode);
		return () => {
			chartObject?.destroy();
		};
	});
};

export default chart;
