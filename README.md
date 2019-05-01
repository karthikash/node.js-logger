
# winston - logger - node.js
using this winston we can log
```sh
`${info.timestamp} [${info.label}] ${info.level}: ${info.message}`
// e.g. 2019-05-01T05:39:14.292Z [My Logger] silly: This one is a Silly log!
```
### Installation & Quick Start

##### winston requires [**Node.js**](https://nodejs.org/) to run.

##### Install the dependencies.

```sh
$ cd node.js-logger
$ npm install
```
Create an .env file in order to switch the environments
##### For development environments.. 
```sh
$ ENV = dev
$ npm start
```
The logger will log all the logs into the console if the environment is set to dev
##### For production environments.. 
```sh
$ ENV = prod
$ npm start
```
The logger will log all the logs into comined.log if the environment is set to prod