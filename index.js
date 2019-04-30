const logger = require('./logger')

// case 1: logging using levels
logger.log('silly', "This one is a Silly log!");
logger.log('debug', "Debugging the current log :/");
logger.log('verbose', "You're using too much words for this :(");
logger.log('info', "I hope you got the essential information :o");
logger.log('warn', "There is a possible danger, please revise :o");
logger.log('error', "Ohhh, GOD!, A mistake....");

// case 2: 
/* 
logger.silly("This one is a Silly log!");
logger.debug("Debugging the current log :/");
logger.verbose("You're using too much words for this :(");
logger.info("I hope you got the essential information :o");
logger.warn("There is a possible danger, please revise :o");
logger.error("Ohhh, GOD!, A mistake...."); 
*/