/**
 * Array.prototype.diff - Computes the difference of arrays
 * 
 *     array1.diff(array1, ...)
 * 
 * Compares `this` against array1 and returns the difference.
 * 
 *     [1,2,3,4,5].diff([1,2,6]) == [3,4,5]
 *     [1,2,3,4,5].diff([1,2], [1,4,6]) == [3,5]
 * 
 * @requires Array.prototype.every
 * @requires Array.prototype.filter
 * @requires Array.prototype.indexOf
 * 
 * @param {Array} array1 The array to exclude
 * @param {Array} ... More arrays to compare against
 * @return {Array} Returns an array containing all the entries from `this` that
 * are not present in any of the other arrays.
 */
Array.prototype.diff = function() {
	
	// Arrays to exclude
	var args = arguments;
	
	// Return this array, filtered 
	return this.filter(function(item) {
		
		// Filter:
		//    returns true while NONE of the arguments (arrays) contain the item
		//    (ie: `arguments[*].indexOf(item) == -1`)
		return args.every(function(excludeArray) {
			return excludeArray.indexOf(item) == -1;
		});
		
	});
};