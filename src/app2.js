import {DirWatcher, Importer} from './modules';

new Importer();
const myDirwatcher = new DirWatcher();

myDirwatcher.watch('./data', 5000);
