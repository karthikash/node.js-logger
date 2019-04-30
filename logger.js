require('dotenv').config()

const { createLogger, format, transports } = require('winston')
const { combine, timestamp, label, printf } = format

const myFormat = printf(info => {
    return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`
})

const TRANSPORTS = [];

if (process.env.ENV == 'prod') {
    TRANSPORTS.push(
        
        // write to all logs with level `silly` and below to `combined.log` 

        // npm logging levels prioritized from 0 - 5 (lowest to highest)
        // error: 0, 
        // warn: 1, 
        // info: 2, 
        // verbose: 3, 
        // debug: 4, 
        // silly: 5  
        
        new transports.File({
            level: 'silly',
            filename: 'combined.log',
            maxsize: 4096,
            maxFiles: 4,
            json: true,
            handleExceptions: true,
            colorize: false,
            timestamp: true
        })
    )
} else {
    TRANSPORTS.push(
        new transports.Console({
            level: 'silly',
            handleExceptions: true,
            json: true,
            colorize: true,
            timestamp: true
        })
    )
}

const logger = createLogger({
    transports: TRANSPORTS,
    exitOnError: false,
    format: combine(
        label({ label: 'My Logger' }),
        format.colorize(),
        timestamp(),
        myFormat
    )
})

module.exports = logger