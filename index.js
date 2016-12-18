const {yellow, gray} = require('chalk');

module.exports = function yakiusay(text) {
return`
　  ${yellow('彡(ﾟ)(ﾟ)')} 　　／￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
 　${yellow('彡　  　と')}　＜　${text}
 　${yellow('（　　　 ）')}　 ＼＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿
  　${yellow('｜ ｜ |')}
${gray('___')}${yellow('（＿_）__）')}${gray('＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿')}
  `;
}

// console.log(`
// 　  彡(ﾟ)(ﾟ) 　　／￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
//  　彡　  　と　＜　 ${text}
//  　（　　　 ）　 ＼＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿
//   　｜ ｜ |
// ___（＿_）__）＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿
// }
//   `);
// }
