/* ==========================================================================
   Settings for project environment.
   Used by JavaScript build process and JavaScript test configuration.
   ========================================================================== */

/**
 * Environment variable mappings in JavaScript from the project root .env file.
 */
const envvars = {
  NODE_ENV: process.env.NODE_ENV,
};

/**
 * Convenience settings for various project directory paths.
 */
const paths = {
  unprocessed: './src',
  processed: './dist',
  modules: './node_modules',
  test: './test',
};

export default {
  envvars,
  paths,
};
