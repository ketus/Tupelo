### Installation

`npm install tupelo`

```javascript
var log = require('tupelo');
```

### Set log level or disable logging at all
```javascript
log.setLogLevel('INFO');
//VERBOSE DEBUG INFO WARN ERROR DISABLED
```
'WARN' is the default.

### Log it

```javascript
log.verbose('verbose logging');
log.debug('debug info');
log.info('regular info');
log.warn('warnings');
log.error('errors');
```

### Read it
![alt text](https://raw.githubusercontent.com/ketus/Tupelo/master/readme-static/debugLevels.png "Debug levels")
