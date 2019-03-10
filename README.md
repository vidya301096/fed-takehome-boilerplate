# designory. Front End Developer - Take Home Test Boilerplate

## Instructions

Install all npm modules via:

    npm ci
    # alternatively,
    # npm install
    
Then simply run `npm run dev` to start developing!

_IMPORTANT_:  
Save all of your work within the **src/** folder. The **dist/** folder is ignored from the repository.

### Libraries

Uses the following libraries:

*  [sass](https://www.npmjs.com/package/sass) - SCSS compilation.
*  [babel](https://www.npmjs.com/package/babel) - JavaScript ESNext to ES5 compilation.
*  [cpx](https://www.npmjs.com/package/cpx) - Copies source HTML file to **dist** directory.
*  [Browersersync](https://www.browsersync.io/) - Development server with live-reloading.
*  [concurrently](https://www.npmjs.com/package/concurrently) - Enables all build scripts (`styles`, `scripts`, `views`, `serve`) to be run at the same time.

### NPM Scripts

|      Script       |                                Description                                 |
|-------------------|----------------------------------------------------------------------------|
|   `npm run build` | Compiles sources files.                                                    |
|   `npm run watch` | Compiles source files and watches for changes.                             |
|   `npm run serve` | Starts the development server (with hot reloading).                        |
| **`npm run dev`** | Compiles source files, watches for changes, and starts development server. |
