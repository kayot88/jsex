/*
 * UNIQ
 *
 * Takes an array of elements and returns an array with all the duplicates
 * removed.
*/

function uniq(arr) {
  // IMPLEMENT ME
}

/* =========== DON'T CHANGE THE CODE AFTER THIS LINE ===============" */

test('removes duplicates from an array', () => {
  expect(uniq([1, 1, 2, 3, 3, 1])).toEqual([1, 2, 3])
})
