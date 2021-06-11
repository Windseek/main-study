const acorn = require('acorn');
const code = `
var c = {b: 's'};
var a = {a:'', b: 'ss', ...c };
`;
const acornParsedAST = acorn.parse(code);
const deflate =  require('@mtfe/balloon-deflate');
// console.log('acornParsedAST', deflate.default(acornParsedAST));

const JSVM = require('@mtfe/jsvm-with-confusion').default;
//jsvm 底层 http://dev.sankuai.com/code/repo-detail/fe/fe.wxapp-sdk-jsvm/file/list?branch=refs%2Fheads%2Fmaster

const VM = new JSVM(this);
VM.execute(deflate.default(acornParsedAST));
console.log(VM.__context__.a);