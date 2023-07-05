import { mkdirSync, writeFileSync } from 'fs';
import nunjucks from 'nunjucks';

import environment from '../config/environment.js';
const { unprocessed } = environment.paths;

const njkPaths = `${unprocessed}/templates`;

/**
 * @param {object} baseConfig - The base esbuild configuration.
 */
function templates(baseConfig) {
  nunjucks.configure(njkPaths, { throwOnUndefined: true });
  const result = nunjucks.render('index.html', { org_name: 'foobar' });
  mkdirSync(baseConfig.outdir, { recursive: true });
  writeFileSync(`${baseConfig.outdir}/index.html`, result);
}

export { templates, njkPaths };
