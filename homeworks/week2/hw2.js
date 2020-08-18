function capitalize(str) {
   return str[0].toUpperCase() + str.slice(1);
 }

console.log(capitalize('tim'))


//這題是參考解答的，下面是我卡住的程式碼，我學到這題必須要分成兩件事:
//一是如何取出第一個字母：用 str[0].toUpperCase()就可以了，不必要多一個雞肋變數
//二是後面要記得加上除了第一個字母以外剩下的部分
//接著要用 console.log(放進函式名稱)，把函式印出來
//為了確定我真的懂了，我把程式碼全部刪掉，再重新寫了一次

//卡住之前的程式碼
var str = ''
var n = str[0]
function capitalize (str){
  return n.toUpperCase()
   }
capitalize ()
