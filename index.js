
// module.exports = function tiny(string) {
//   if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
//   return string.replace(/\s/g, "");
// };


function tiny(string) {
  console.log('====================tiny')
  if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
  return string.replace(/\s/g, "");
};


console.log('=========================index.js',tiny('i am beautiful'))
