function reverse(str) {
   let result = '';
   for (let i = str.length - 1; i >= 0; i -= 1) {
     result += str[i];
   }
   console.log(result);
 }
reverse('abc')

// 這題我參考解答，一開始的想法是，先把字串裡的字母一個個輸出，然後再從最後面一個字母依序放回去，接著再印出來
//但只寫到迴圈就卡住了，下面是我亂七八糟的程式碼
//沒想到可以寫成迴圈倒著做！這想法太高級惹！
//這題我學到了迴圈倒著做：
//1. 設定迴圈初始值，讓 i = 字串的位數
//2. 設定迴圈終止值，讓 i >= 0 (這樣迴圈才會從最後一位跑到第一位)
//3. 平常都 i++ 的，倒過來就是 i = i -1 (寫成 i -= 1)

//卡住之前的程式碼
var str = 'abc'
var a = ''
var n = str.length 
function stringreverse(str){
   for(i=1; i<n-1;i++)
   return str[i]
}
console.log(str)