# Sane Logger

A simple logger using chalk + moment for timestamps

## Usage

```javascript
const logger = require('sane-node-logger')

/* returns [<timestamp>] <text> */

logger.log('Hey!') /* returns white text */
logger.info('Hello!') /* returns blue text */
logger.warn('Hello!') /* returns yellow text */
logger.success('Hello!') /* returns green text */
logger.red('Hello!') /* returns red text */

```
