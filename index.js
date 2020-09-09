const pathModule = require('./path_module')
const osModule = require('./os_module')
const fileSystemModule = require('./file_system_module')

console.log('Printing Value from Path !!!')
console.log(pathModule.getFileName())
console.log(pathModule.getDirName())

console.log('Printing Value from OS !!!')
console.log(osModule.getValueFromOsModule())

console.log('Printing Value from File System Module !!!')
console.log(fileSystemModule.getAllFilesName())