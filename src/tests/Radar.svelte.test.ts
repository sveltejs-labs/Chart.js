import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { Radar } from '$lib/index.js';
import type { ChartData, ChartOptions } from 'chart.js';

const data: ChartData = {
	labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
	datasets: [
		{
			label: 'My First Dataset',
			data: [65, 59, 90, 81, 56, 55, 40],
			fill: true,
			backgroundColor: 'rgba(255, 99, 132, 0.2)',
			borderColor: 'rgb(255, 99, 132)',
			pointBackgroundColor: 'rgb(255, 99, 132)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgb(255, 99, 132)'
		},
		{
			label: 'My Second Dataset',
			data: [28, 48, 40, 19, 96, 27, 100],
			fill: true,
			backgroundColor: 'rgba(54, 162, 235, 0.2)',
			borderColor: 'rgb(54, 162, 235)',
			pointBackgroundColor: 'rgb(54, 162, 235)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgb(54, 162, 235)'
		}
	]
};

const options: ChartOptions = {
	elements: {
		line: {
			borderWidth: 3
		}
	},
	responsive: true
};

describe('Radar Chart', () => {
	it('should render a canvas', () => {
		const { container } = render(Radar);
		const canvas = container.querySelector('canvas');

		expect(canvas).not.toBeNull();
	});

	it('should pass data prop', () => {
		const component = render(Radar, { data });

		expect(() => component).not.toThrow();
	});

	it('should pass data and options prop', () => {
		const component = render(Radar, { data, options });

		expect(() => component).not.toThrow();
	});
});
