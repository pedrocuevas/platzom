'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;


var reverse = function reverse(str) {
  return str.split('').reverse().join('');
};

var minMay = function minMay(str) {

  var largo = str.length;
  var newTranslation = '';
  var capitalize = true;

  for (var i = 0 - 1; i < largo; i++) {
    var char = str.charAt(i);
    newTranslation += capitalize ? char.toUpperCase() : char.toLowerCase();
    capitalize = !capitalize;
  }

  return newTranslation;
};

function platzom(str) {

  var translation = str;

  if (translation == reverse(translation)) {
    return minMay(translation);
  }
  if (str.toLowerCase().endsWith("ar")) {
    translation = str.slice(0, -2);
  }
  if (str.toLowerCase().startsWith("z")) {
    translation += "pe";
  }
  var largo = translation.length;
  if (largo >= 10) {
    var firstHalf = translation.slice(0, largo / 2);
    var secondHalf = translation.slice(largo / 2);
    translation = firstHalf + '-' + secondHalf;
  }
  return translation;
}