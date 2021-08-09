# vite-esbuild-define-test

Testing ESBuild options in vite config

- Run `yarn` to install dependencies.
- Run `yarn dev:esbuild` to start ESBuild dev server using [serve](https://esbuild.github.io/api/#serve) API.
  - Verify that `undefined` is printed in the console for http://127.0.0.1:8000/
- Run `yarn dev:esbuild --define:global=window` to start ESBuild dev server which passes `window` for identifier `global`.
  - Verify that `object` is printed in the console for http://127.0.0.1:8000/
