<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Bubble from '$lib/components/Bubble.svelte';

	const data = {
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
		argTypes: {
			data: { control: 'object' },
			options: { control: 'object', defaultValue: null },
			updateMode: { control: 'text', defaultValue: null },
			id: { control: 'text', defaultValue: null },
			width: { controls: ['number', 'text'], defaultValue: null },
			height: { controls: ['number', 'text'], defaultValue: null },
			ariaLabel: { control: 'text', defaultValue: null },
			role: { control: 'text', defaultValue: null }
		}
	});
</script>

<Story name="Primary" args={{ data }} />
