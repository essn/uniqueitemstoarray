import findUniqueNumbers from '../src';

console.log(
  'All same items example 1 ----------------------------------------'
);
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('All same items: ', array1);
console.log('Unique items: ', findUniqueNumbers(array1));
console.log('\n');

console.log(
  'All same items example 2 ----------------------------------------'
);
const array2 = [
  1, 4, 3, 3, 3, 2, 5, 10, 7, 20, 22, 10, 11, 23, 1203, 11, 20, 22, 4,
];
console.log('Non-unique items: ', array2);
console.log('Unique items: ', findUniqueNumbers(array2));
console.log('\n');

console.log(
  'All same items example 3 ----------------------------------------'
);

const array3 = new Array(20000);
console.log('20000 same items: ', array3.length);
console.time('20000 same items');
findUniqueNumbers(array3);
console.timeEnd('20000 same items');
console.log('Length: ', array3.length);
console.log('\n');

console.log(
  'All same items example 3 ----------------------------------------'
);

const array4 = new Array(500000);
console.log('500000 same items: ', array4.length);
console.time('500000 same items');
findUniqueNumbers(array4);
console.timeEnd('500000 same items');
console.log('Length: ', array4.length);
console.log('\n');

console.log(
  'All same items example 4 ----------------------------------------'
);

const array5 = new Array(1000000);
console.log('1000000 same items: ', array5.length);
console.time('1000000 same items');
findUniqueNumbers(array5);
console.timeEnd('1000000 same items');
console.log('Length: ', array5.length);
console.log('\n');

console.log(
  'All same items example 5 ----------------------------------------'
);

const array61 = new Array(10000).fill(1);
const array62 = new Array(10000).fill(2);

const array6 = array61.concat(array62).concat(3);
console.log(array6);
console.log('10000 1s zipped with 10000 2s and one 3: ', array6.length);
console.time('20001 but one unique item:');
const result = findUniqueNumbers(array6);
console.timeEnd('20001 but one unique item:');
console.log('Expected result: ', [3]);
console.log('Result: ', result);
