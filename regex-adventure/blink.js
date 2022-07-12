// all copy but don't working.


import marked from 'marked'
 
export default function (str) {
  var md = marked(str)
  return md.replace(/@@(.+?)@@/g, '<blink>$1</blink>')
}