/**
 * Returns all unique elements to an array of numbers.
 * Not to be confused with unique elements in an array.
 *
 * @param {number[]} numbers An array of numbers.
 * @return {Array<number>} An array of unique numbers.
 */
function findUniqueNumbers(numbers: Array<number>): Array<number> {
  if (numbers.length === 0) return [];

  const uniqueSet: Set<number> = new Set();
  const dm: Map<number | null | undefined, number | null | undefined> =
    new Map();

  for (const item of numbers) {
    let count: number = dm.get(item) || 0;

    if (dm.has(item)) {
      dm.set(item, count + 1);
    } else {
      dm.set(item, 1);
    }

    if (!uniqueSet.has(item) && dm.get(item) === 1) {
      uniqueSet.add(item);
    }

    count = dm.get(item) || 0;

    if (uniqueSet.has(item) && count > 1) {
      uniqueSet.delete(item);
    }
  }

  return Array.from(uniqueSet);
}

export default findUniqueNumbers;
