const Bundler = require('parcel-bundler');
const express = require('express');
const path = require('path');

const app = express();

// Bundler options      
/** {
  outDir: './dist', // The out directory to put the build files in, defaults to dist
  outFile: 'index.html', // The name of the outputFile
  publicUrl: './', // The url to server on, defaults to dist
  watch: true, // whether to watch the files and rebuild them on change, defaults to process.env.NODE_ENV !== 'production'
  cache: true, // Enabled or disables caching, defaults to true
  cacheDir: '.cache', // The directory cache gets put in, defaults to .cache
  contentHash: false, // Disable content hash from being included on the filename
  minify: false, // Minify files, enabled if process.env.NODE_ENV === 'production'
  scopeHoist: false, // turn on experimental scope hoisting/tree shaking flag, for smaller production bundles
  target: 'browser', // browser/node/electron, defaults to browser
  logLevel: 3, // 3 = log everything, 2 = log warnings & errors, 1 = log errors
  sourceMaps: true, // Enable or disable sourcemaps, defaults to enabled (minified builds currently always create sourcemaps)
  hmrHostname: '', // A hostname for hot module reload, default to ''
  detailedReport: false // Prints a detailed report of the bundles, assets, filesizes and times, defaults to false, reports are only printed if watch is disabled
}; */

async function runBundle(entryFile) {  
  const name = path.basename(path.dirname(entryFile));
  const outDir = path.join(__dirname, `public/${name}`);
  
  console.log('Bundling', entryFile, 'to', outDir, '...');
  const options = {
    outDir: outDir,
    minify: false,
    publicUrl: './',
    watch: true,
  };
  const bundler = new Bundler(entryFile, options);
  return await bundler.bundle();
}

const entryFiles = [
  path.join(__dirname, `./button/index.html`),
  path.join(__dirname, `./checkbox/index.html`),
  path.join(__dirname, `./drawer/index.html`),
];

for (const entryFile of entryFiles) {
  runBundle(entryFile);
}

app.use(express.static(path.join(__dirname, 'public')));

app.listen(8080);