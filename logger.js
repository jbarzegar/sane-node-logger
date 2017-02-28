const chalk = require('chalk')
const moment = require('moment')

const time = moment().format('MMM,Do,YY HH:MM')

const timestamp = chalk.gray(`[${time}]:`)

const logger = {
  log(text) {
    const output = `${timestamp} ${text}`
    return console.log(output)
  },
  info(text) {
    const output = `${timestamp} ${chalk.cyan(text)}`
    return console.info(output)
  },
  warn(text) {
    const output = `${timestamp} ${chalk.yellow.bold(text)}`
    return console.warn(output)
  },
  error(text) {
    const output = `${timestamp} ${chalk.red.bold(text)}`
    return console.error(output)
  },
  success(text) {
    const output = `${timestamp} ${chalk.green(text)}`
    return console.log(output)
  }

}

module.exports = logger
