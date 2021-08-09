# vite-esbuild-define-test

Testing ESBuild options in vite config

- Run `yarn` to install dependencies.
- Run `yarn dev:esbuild` to start ESBuild dev server using [serve](https://esbuild.github.io/api/#serve) API.
  - Verify that `typeof global: undefined` is printed in the console for http://127.0.0.1:8000/
- Run `yarn dev:esbuild --define:global=window` to start ESBuild dev server which passes `window` for identifier `global`.
  - Verify that `typeof global: object` is printed in the console for http://127.0.0.1:8000/
- Run `yarn dev:vite` to start Vite Dev Server.
  - Verify that `typeof global: undefined` is printed in the console for http://localhost:3000/
- Run `yarn dev:vite -c vite.esbuild.config.js` to start Vite Dev Server with ESBuild config defining `global`.
  - Verify that `typeof global: undefined` is printed in the console for http://localhost:3000/
