/* Mission:
 * Convert the given number into a roman numeral.
 * All roman numerals answers should be provided in upper-case.
 *
 * Resources:
 * http://www.mathsisfun.com/roman-numerals.html
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 */
 
var romans = {
    1:"I", 2:"II", 3:"III", 4:"IV", 5:"V", 6:"VI", 7:"VII", 8:"VIII", 9:"IX", 
    10:"X", 20:"XX", 30:"XXX", 40:"XL", 50:"L", 60:"LX", 70:"LXX", 80:"LXXX", 90:"XC",
    100:"C", 200:"CC", 300:"CCC", 400:"CD", 500:"D", 600:"DC", 700:"DCC", 800:"DCCC", 900:"CM",
    1000:"M", 2000:"MM", 3000:"MMM"};

function convertToRoman(num){
  var roman = "";
  do{
    var power = parseInt(num.toString().length)-1;
    var exp = Math.pow(10, power);
    roman += romans[(Math.floor(num / exp) * exp)];
    num -= Math.floor(num / exp) * exp;
    if(num.toString().length == 1 && num != 0){
      roman += romans[num];
    }
  } while(num.toString().length > 1);
  return roman;
}

/* =============================================================================
 * Example Test Cases
 * =============================================================================
 */
convertToRoman(2);    //should return "II"
convertToRoman(3);    //should return "III"
convertToRoman(4);    //should return "IV"
convertToRoman(5);    //should return "V"
convertToRoman(9);    //should return "IX"
convertToRoman(12);   //should return "XII"
convertToRoman(16);   //should return "XVI"
convertToRoman(29);   //should return "XXIX"
convertToRoman(44);   //should return "XLIV"
convertToRoman(45);   //should return "XLV"
convertToRoman(68);   //should return "LXVIII"
convertToRoman(83);   //should return "LXXXIII"
convertToRoman(97);   //should return "XCVII"
convertToRoman(99);   //should return "XCIX"
convertToRoman(500);  //should return "D"
convertToRoman(501);  //should return "DI"
convertToRoman(649);  //should return "DCXLIX"
convertToRoman(798);  //should return "DCCXCVIII"
convertToRoman(891);  //should return "DCCCXCI"
convertToRoman(1000); //should return "M"
convertToRoman(1004); //should return "MIV"
convertToRoman(1006); //should return "MVI"
convertToRoman(1023); //should return "MXXIII"
convertToRoman(2014); //should return "MMXIV"
convertToRoman(3999); //should return "MMMCMXCIX"
