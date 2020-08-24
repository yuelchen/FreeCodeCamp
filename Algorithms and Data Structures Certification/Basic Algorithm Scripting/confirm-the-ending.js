/* Mission:
 * Check if a string (first argument, str) ends with the given target string (second argument, target).
 * This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
 * But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
 *
 * Resources:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
 */

function confirmEnding(str, target) {
	return str.substring(str.length-target.length) === target;
}

/* =============================================================================
 * Example Test Cases
 * =============================================================================
 */
confirmEnding("Bastian", "n"); 
//should return true

confirmEnding("Connor", "n"); 
//should return false

confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"); 
//should return false

confirmEnding("He has to give me a new name", "name"); 
//should return true

confirmEnding("Open sesame", "same"); 
//should return true

confirmEnding("Open sesame", "pen"); 
//should return false

confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"); 
//should return false

//do not use the built-in method .endsWith() to solve the challenge.
