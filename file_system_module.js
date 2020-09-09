const fileSystemModule = require('fs');

const getAllFilesName = () => {
    fileSystemModule.readdir('./' , (err, files) =>{
        if(err){
            console.log('Some Error Occured', err);
        }else{
            console.log('All files =', files);
        }
    })
}


exports.getAllFilesName = getAllFilesName;