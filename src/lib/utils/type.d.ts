import type { ChartData, ChartOptions, UpdateMode } from 'chart.js';

export interface ChartProps {
	data: ChartData;
	options?: ChartOptions | undefined;
	updateMode?: UpdateMode | undefined;
	id?: string | undefined;
	width?: number | string | undefined;
	height?: number | string | undefined;
	ariaLabel?: string | undefined;
	role?: string | undefined;
}
