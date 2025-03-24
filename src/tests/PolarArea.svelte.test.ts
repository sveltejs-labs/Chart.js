import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { PolarArea } from '$lib';
import type { ChartData, ChartOptions } from 'chart.js';

const data: ChartData = {
	labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
	datasets: [
		{
			label: 'My First Dataset',
			data: [11, 16, 7, 3, 14],
			backgroundColor: [
				'rgb(255, 99, 132)',
				'rgb(75, 192, 192)',
				'rgb(255, 205, 86)',
				'rgb(201, 203, 207)',
				'rgb(54, 162, 235)'
			]
		}
	]
};

const options: ChartOptions = {
	responsive: true
};

describe('Polar Chart', () => {
	it('should render a canvas', () => {
		const { container } = render(PolarArea);
		const canvas = container.querySelector('canvas');

		expect(canvas).not.toBeNull();
	});

	it('should pass data prop', () => {
		const component = render(PolarArea, { data });

		expect(() => component).not.toThrow();
	});

	it('should pass data and options prop', () => {
		const component = render(PolarArea, { data, options });

		expect(() => component).not.toThrow();
	});
});
