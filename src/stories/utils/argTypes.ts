import type { ArgTypes } from '@storybook/svelte';

export const argTypes: Partial<ArgTypes<ChartProps>> = {
	data: {
		control: 'object',
		description: 'ChartJS data'
	},
	options: {
		control: 'object',
		description: 'ChartJS options'
	},
	plugins: {
		control: 'object',
		description: 'ChartJS plugins'
	},
	updateMode: {
		control: 'select',
		description: 'ChartJS update mode'
	},
	id: {
		control: 'text',
		description: 'Canvas id'
	},
	width: {
		control: {
			type: 'number'
		},
		description: 'Canvas width'
	},
	height: {
		control: {
			type: 'number'
		},
		description: 'Canvas height'
	},
	'aria-label': {
		control: 'text',
		description: 'Canvas aria-label'
	},
	role: {
		control: 'text',
		description: 'Canvas role'
	}
};

export default argTypes;
