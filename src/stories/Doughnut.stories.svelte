<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Doughnut from '$lib/components/Doughnut.svelte';
	import argTypes from './utils/argTypes';
	import type { ChartData } from 'chart.js';

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

	const { Story } = defineMeta({
		title: 'Doughnut Chart',
		component: Doughnut,
		argTypes
	});
</script>

<Story name="Primary" args={{ data: data }} />
