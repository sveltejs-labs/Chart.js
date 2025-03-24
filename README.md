# @sveltejs-labs/chart.js

<img align="right" width="100" height="100" alt="@sveltejs-labs/chart.js logo" src="https://raw.githubusercontent.com/sveltejs-labs/chart.js/master/static/logo.png">

Svelte wrapper for [chart.js](https://www.chartjs.org/) Open for PRs and contributions!

[![npm version](https://badge.fury.io/js/@sveltejs-labs%2Fchart.js.svg)](https://badge.fury.io/js/@sveltejs-labs%2Fchart.js)
![NPM Version](https://img.shields.io/npm/v/%40sveltejs-labs%2Fchart.js)

## Install

Install this library with peer dependencies:

```
bun add @sveltejs-labs/chart.js chart.js
# or
pnpm add @sveltejs-labs/chart.js chart.js
# or
yarn add @sveltejs-labs/chart.js chart.js
# or
npm i @sveltejs-labs/chart.js chart.js
```

## Usage

```svelte
<script>
  import { Line } from '@sveltejs-labs/chart.js'
</script>

<Line data={...} />
```

### Custom Size

In order for Chart.js to obey the custom size you need to set `maintainAspectRatio` to false, example:

```svelte
<Line {data} width={100} height={50} options={{ maintainAspectRatio: false }} />
```

## License

Read [LICENSE.md](LICENSE.md)
