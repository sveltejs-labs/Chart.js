const MONTHS = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

interface Config {
	count: number;
	section?: number;
}

export function months(config: Config) {
	const cfg = config || {};
	const count = cfg.count || 12;
	const section = cfg.section;
	const values = [];
	let i, value;

	for (i = 0; i < count; ++i) {
		value = MONTHS[Math.ceil(i) % 12];
		values.push(value.substring(0, section));
	}

	return values;
}

export default months;
