const fs = require('fs'); 
const path = require('path');
const deleteMedia = (media) => {
    media.forEach(fileName => {
        const filePath = path.join(__dirname, '../', 'uploads', fileName);
        fs.unlink(filePath, (err) => {
            if (err) {
              console.error('Error deleting file:', err);
            } else {
              console.log('File deleted:', filePath);
            }
          });
    }); 
}
module.exports = {deleteMedia}; 

