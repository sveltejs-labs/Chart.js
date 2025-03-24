import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { Doughnut } from '$lib';
import type { ChartData, ChartOptions } from 'chart.js';

const data: ChartData = {
	labels: ['Red', 'Blue', 'Yellow'],
	datasets: [
		{
			label: 'My First Dataset',
			data: [300, 50, 100],
			backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
			hoverOffset: 4
		}
	]
};

const options: ChartOptions = {
	responsive: true
};

describe('Doughnut Chart', () => {
	it('should render a canvas', () => {
		const { container } = render(Doughnut);
		const canvas = container.querySelector('canvas');

		expect(canvas).not.toBeNull();
	});

	it('should pass data prop', () => {
		const component = render(Doughnut, { data });

		expect(() => component).not.toThrow();
	});

	it('should pass data and options prop', () => {
		const component = render(Doughnut, { data, options });

		expect(() => component).not.toThrow();
	});
});
