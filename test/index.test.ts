import findUniqueNumbers from '../src';

describe('findUniqueNumbers with a small set', () => {
  it('should return all elements unique to an array of numbers', () => {
    const array = [
      1, 4, 3, 3, 3, 2, 5, 10, 7, 20, 22, 10, 11, 23, 1203, 11, 20, 22, 4,
    ];
    const uniqueElements = [1, 2, 5, 7, 23, 1203];

    expect(findUniqueNumbers(array)).toEqual(uniqueElements);
  });
});

describe('findUniqueNumbers with a large set', () => {
  it('should return all elements unique to an array of numbers', () => {
    const largeArrayOfOnes = new Array(10000).fill(1);
    const largeArrayOfTwos = new Array(10000).fill(2);
    const uniqueElement = [3];
    const largeArray = largeArrayOfOnes
      .concat(largeArrayOfTwos)
      .concat(uniqueElement);

    expect(findUniqueNumbers(largeArray)).toEqual(uniqueElement);
  });
});

describe('findUniqueNumbers with a huge set', () => {
  it('should return all elements unique to an array of numbers', () => {
    const hugeArray = new Array(1000000);

    expect(findUniqueNumbers(hugeArray)).toEqual([]);
  });
});

describe('findUniqueNumbers with a massive set', () => {
  it('should return all elements unique to an array of numbers', () => {
    const massiveArray = new Array(10000000);

    expect(findUniqueNumbers(massiveArray)).toEqual([]);
  });
});
