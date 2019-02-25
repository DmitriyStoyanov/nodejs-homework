import {dirwatcher, importer} from './modules'

new importer;
const myDirwatcher = new dirwatcher;

myDirwatcher.watch('./data', 5000);