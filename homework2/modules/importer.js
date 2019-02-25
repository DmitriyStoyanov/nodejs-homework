import { myEmitter } from './dirwatcher'
import csv from 'csvtojson'

myEmitter.on('changed', (filename) => {
  console.log(`importer event occurred with filename ${filename}`);
  csv().fromFile('./data/'+filename)
    .then((jsonObj)=>{
    console.log(jsonObj);})
});

export default class Importer {

}