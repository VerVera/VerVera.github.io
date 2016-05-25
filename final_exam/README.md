# readme

 Site HAPPY HOLIDAYS
 
## Build instructions
This project uses NPM to manage dependency

`npm install`: install all dependency 

### Automated tasks
This project uses Gulp to run tasks for development and production builds.
The tasks are as follows:

`gulp build`: Compiles preprocessors and copy to dist folder 
`gulp serve`: Compiles preprocessors and boots up development server
`gulp serve --open`: Same as `gulp serve` but will also open up site/app in your default browser
`gulp serve --production`: Same as `gulp serve` but will run all production tasks so you can view the site/app in it's final optimized form
