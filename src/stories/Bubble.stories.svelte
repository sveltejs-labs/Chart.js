<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Bubble from '$lib/components/Bubble.svelte';
	import argTypes from './utils/argTypes';
	import type { ChartData } from 'chart.js';

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

	const { Story } = defineMeta({
		title: 'Bubble Chart',
		component: Bubble,
		argTypes
	});
</script>

<Story name="Primary" args={{ data }} />
