<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { PolarArea } from '$lib/index.js';
	import argTypes from './utils/argTypes.js';
	import type { ChartData } from 'chart.js';

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

	const { Story } = defineMeta({
		title: 'PolarArea Chart',
		component: PolarArea,
		argTypes
	});
</script>

<Story name="Primary" args={{ data: data }} />
