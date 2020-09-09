const path = require('path');

const getFileName = () => {
    return path.parse(__filename);
}

const getDirName = () => {
    return path.parse(__dirname);
}

exports.getFileName = getFileName;
exports.getDirName = getDirName;