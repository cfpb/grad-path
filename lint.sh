## Run prettier. See ignored path in .prettierignore.
npx prettier "./**/*.{js,jsx,ts,tsx,md,css,less}" --write

## Run JS linting. See ignored path in .eslintignore.
eslint --ignore-pattern node_modules './{src,config,esbuild,scripts,test}/**/*.js' --fix

## Run CSS linting. See ignored path in .stylelintignore.
stylelint './src/**/*.{css,less}' --fix
