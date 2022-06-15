function log(message) {
    console.log(message)
}

function info(message) { 
    console.info(`[INFO]: ${message}`)
}

function warn(message) { 
    console.warn(`[WARNING]: ${message}`)
}

function debug(message) { 
    console.debug(`[DEBUG]: ${message}`)
}

function error(message) { 
    console.error(`[ERROR]: ${message}`)
}

module.exports = {log, info, warn, debug, error};
