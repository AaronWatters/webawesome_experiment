# Project organization

This repository is organized as a small Vite TypeScript library project.

- `src/webawesome_experiment.ts` is the bundle entrypoint. It imports and registers the required WebAwesome components:
  - checkbox
  - color-picker
  - input
  - number-input
  - slider
- `vite.config.ts` configures Vite in library mode to produce a single UMD bundle at:
  - `dist/webawesome_experiment.umd.js`
- `experiment_demo.html` demonstrates all bundled components and reports live interaction feedback from component events.
- `package.json` defines install/build scripts and dependencies.
