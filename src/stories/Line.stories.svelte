<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Line from '$lib/components/Line.svelte';

	import months from '$lib/utils/months.js';

	const labels = months({ count: 7 });
	const data = {
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

	const { Story } = defineMeta({
		title: 'Line Chart',
		component: Line,
		argTypes: {
			data: { control: 'object' }
		}
	});
</script>

<Story name="Primary" args={{ data: data }} />
