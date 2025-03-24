import type { ChartData, ChartOptions, Plugin, UpdateMode } from 'chart.js';

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	export interface ChartProps {
		data: ChartData;
		options?: ChartOptions | undefined;
		plugins?: Plugin[] | undefined;
		updateMode?: UpdateMode | undefined;
		id?: string | undefined;
		width?: number | string | undefined;
		height?: number | string | undefined;
		ariaLabel?: string | undefined;
		role?: string | undefined;
	}
}

export {};
