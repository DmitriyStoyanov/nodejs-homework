import {myEmitter} from './dirwatcher';
import csv from 'csvtojson';

myEmitter.on('changed', (path, filename) => {
    console.log(`importer event occurred with path ${path} and filename ${filename}`);
    csv().fromFile(path+'/'+filename)
        .then((jsonObj)=>{
            console.log(jsonObj);
        });
});

export default class Importer {

}
