import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { Line } from '$lib/index.js';
import type { ChartData, ChartOptions } from 'chart.js';
import months from '../stories/utils/months.js';

const labels = months({ count: 7 });
const data: ChartData = {
	labels: labels,
	datasets: [
		{
			label: 'My First Dataset',
			data: [65, 59, 80, 81, 56, 55, 40],
			fill: false,
			borderColor: 'rgb(75, 192, 192)',
			tension: 0.1
		}
	]
};

const options: ChartOptions = {
	responsive: true
};

describe('Line Chart', () => {
	it('should render a canvas', () => {
		const { container } = render(Line);
		const canvas = container.querySelector('canvas');

		expect(canvas).not.toBeNull();
	});

	it('should pass data prop', () => {
		const component = render(Line, { data });

		expect(() => component).not.toThrow();
	});

	it('should pass data and options prop', () => {
		const component = render(Line, { data, options });

		expect(() => component).not.toThrow();
	});
});
