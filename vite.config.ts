import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/webawesome_experiment.ts',
      name: 'WebAwesomeExperiment',
      formats: ['umd'],
      fileName: () => 'webawesome_experiment.umd.js',
      cssFileName: 'webawesome_experiment'
    }
  }
});
