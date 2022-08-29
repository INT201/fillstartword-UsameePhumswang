const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  //code here
  if(word.startsWith(startWord)){
    return word
  } else if(word == null || word == undefined){
    return undefined
  }else {
    return startWord + word
  }
}
module.exports = fillStartWord
