<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import PolarArea from '$lib/components/PolarArea.svelte';

	const data = {
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
		argTypes: {
			data: { control: 'object' }
		}
	});
</script>

<Story name="Primary" args={{ data: data }} />
