/* eslint no-console: 0 */
const { rollup } = require('rollup');
const babel = require('rollup-plugin-babel');
const json = require('rollup-plugin-json');

rollup({
  entry: 'src/fifo.js',
  plugins: [
    json({
      exclude: ['node_modules/**'],
    }),
    babel({
      babelrc: false,
      presets: ['es2015-rollup'],
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
    }),
  ],
})
.then(bundle => (
  bundle.write({
    format: 'es',
    moduleName: 'Fifo',
    dest: 'lib/fifo.js',
  })
))
.then(() => {
  console.log('💝 Fifo Bundle Created!');
})
.catch((e) => {
  console.error('💀 Rollup Error:', e);
});
