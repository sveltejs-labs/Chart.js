<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Radar } from '$lib/index.js';
	import argTypes from './utils/argTypes.js';
	import type { ChartData } from 'chart.js';

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

	const options = {
		elements: {
			line: {
				borderWidth: 3
			}
		}
	};

	const { Story } = defineMeta({
		title: 'Radar Chart',
		component: Radar,
		argTypes
	});
</script>

<Story name="Primary" args={{ data, options }} />
