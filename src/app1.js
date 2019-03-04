import {User, Product} from './models';

import appconfig from '../config/appconfig.json';

const developer = new User();
const product = new Product();

console.log(`application name: ${appconfig.name}`);
console.log(`developer: ${developer}`);
console.log(`product: ${product}`);
