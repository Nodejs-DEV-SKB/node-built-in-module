const os_module = require('os');

const getValueFromOsModule = () => {
    let text = `Total Memory = ${os_module.totalmem()} \nFree Memory = ${os_module.freemem()} \nType = ${os_module.type}`;
    return text;
}

exports.getValueFromOsModule = getValueFromOsModule;