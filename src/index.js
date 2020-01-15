const fs = require('fs');
const path = require('path');
const dateFunctions = require('date-fns'); 

const message = fs.readFile(
    path.resolve(__dirname, './message.txt'),
    'utf8',
    (err, message) => {
        if (err){
            throw err;
        }
        console.log(message);
        console.log(dateFunctions.format(new Date(2014, 1, 11), 'yyyy-MM-dd'));
    });

console.log('start');