import o3 from './prototype-primal.js';

function getPrototypes(obj, arr = []) {
    if (obj !== null) {
        arr.push(obj.name);
        getPrototypes(Object.getPrototypeOf(obj), arr);
    }
    return arr;
}

const names = getPrototypes(o3);
o3.name; // ECMAScript
console.log(names); // ['ECMAScript', 'JavaScript', 'LiveScript', 'Mocha']
