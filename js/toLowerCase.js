
// 实现函数 ToLowerCase()，该函数接收一个字符串参数 str，并将该字符串中的大写字母转换成小写字母，之后返回新的字符串。

//  

// 示例 1：

// 输入: "Hello"
// 输出: "hello"
// 示例 2：

// 输入: "here"
// 输出: "here"
// 示例 3：

// 输入: "LOVELY"
// 输出: "lovely"


/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
  let result = ""
  for (let index of str) {
    const AAscii = 'A'.charCodeAt()
    const ZAscii = 'Z'.charCodeAt()
    const iAscii = index.charCodeAt()
    if (iAscii >= AAscii && iAscii <= ZAscii) {
      result += String.fromCharCode((iAscii + 32))
    } else {
      result += index
    }
  }
  return result
};

console.log('====================================');
console.log(toLowerCase('Hello'));
console.log('====================================');
console.log(toLowerCase('here'));
console.log('====================================');
console.log(toLowerCase('LOVELY'));
console.log('====================================');