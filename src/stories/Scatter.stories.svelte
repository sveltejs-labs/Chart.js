<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Scatter from '$lib/components/Scatter.svelte';
	import argTypes from './utils/argTypes';
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

	const { Story } = defineMeta({
		title: 'Scatter Chart',
		component: Scatter,
		argTypes
	});
</script>

<Story name="Primary" args={{ data, options }} />
