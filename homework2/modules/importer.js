import { myEmitter } from './dirwatcher'
import csv from 'csvtojson'

myEmitter.on('changed', (directory, filename) => {
  console.log(`importer event occurred with directory ${directory} filename ${filename}`);
  csv().fromFile(directory+'/'+filename)
    .then((jsonObj)=>{
    console.log(jsonObj);})
});

export default class Importer {

}