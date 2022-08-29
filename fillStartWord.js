const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  //code here
  if(word.startsWith(startWord)){
    return word
  } else if(word === null || word === undefiend){
    return undefined
  }else {
    return startWith + word
  }
}
module.exports = fillStartWord
