import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { Scatter } from '$lib';
import type { ChartData, ChartOptions } from 'chart.js';

const data: ChartData = {
	datasets: [
		{
			label: 'Scatter Dataset',
			data: [
				{
					x: -10,
					y: 0
				},
				{
					x: 0,
					y: 10
				},
				{
					x: 10,
					y: 5
				},
				{
					x: 0.5,
					y: 5.5
				}
			],
			backgroundColor: 'rgb(255, 99, 132)'
		}
	]
};

const options: ChartOptions = {
	scales: {
		x: {
			type: 'linear',
			position: 'bottom'
		}
	}
};

describe('Scatter Chart', () => {
	it('should render a canvas', () => {
		const { container } = render(Scatter);
		const canvas = container.querySelector('canvas');

		expect(canvas).not.toBeNull();
	});

	it('should pass data prop', () => {
		const component = render(Scatter, { data });

		expect(() => component).not.toThrow();
	});

	it('should pass data and options prop', () => {
		const component = render(Scatter, { data, options });

		expect(() => component).not.toThrow();
	});
});
