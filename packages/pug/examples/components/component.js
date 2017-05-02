
/**
 * Module dependencies.
 */

var lex = require('../../../pug-lexer')
  , path = __dirname + '/component.jade'
  , str = require('fs').readFileSync(path, 'utf8')
  , fn = lex(str, { filename: path, pretty: true });
//  , fn = pug.compile(str, { filename: path, pretty: true });

console.log(fn);
