import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { Bubble } from '$lib';
import type { ChartData, ChartOptions } from 'chart.js';

const data: ChartData = {
	datasets: [
		{
			label: 'First Dataset',
			data: [
				{
					x: 20,
					y: 30,
					r: 15
				},
				{
					x: 40,
					y: 10,
					r: 10
				}
			],
			backgroundColor: 'rgb(255, 99, 132)'
		}
	]
};

const options: ChartOptions = {
	responsive: true
};

describe('Bubble Chart', () => {
	it('should render a canvas', () => {
		const { container } = render(Bubble);
		const canvas = container.querySelector('canvas');

		expect(canvas).not.toBeNull();
	});

	it('should pass data prop', () => {
		const component = render(Bubble, { data });

		expect(() => component).not.toThrow();
	});

	it('should pass data and options prop', () => {
		const component = render(Bubble, { data, options });

		expect(() => component).not.toThrow();
	});
});
