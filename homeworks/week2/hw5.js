
// 題目：

// 自己的函式自己寫
// 其實仔細思考的話，你會發現那些陣列內建的函式你其實都寫得出來，因此這一題就是要讓你自己動手實作那些函式！
// 我們要實作的函式有兩個：join 以及 repeat。
// （再次強調，這一題要你自己實作這些函式，所以你不會用到內建的join以及repeat）
// join 會接收兩個參數：一個陣列跟一個字串，會在陣列的每個元素中間插入一個字串，最後回傳合起來的字串。
// repeat 的話就是回傳重複 n 次之後的字串。
// join([1, 2, 3], '')，正確回傳值：123
// join(["a", "b", "c"], "!")，正確回傳值：a!b!c
// join(["a", 1, "b", 2, "c", 3], ',')，正確回傳值：a,1,b,2,c,3
// repeat('a', 5)，正確回傳值：aaaaa
// repeat('yoyo', 2)正確回傳值：yoyoyoyo


// 我的回答是參考解答的：

function join(arr, concatStr) {
   if (arr.length === 0) { // special case
     return '';
   }
   let result = arr[0];
   for (let i = 1; i < arr.length; i += 1) {
     result += concatStr + arr[i];
   }
   return result;
 }
console.log(join([1, 2, 3, 4, 5], '＠'))


// 我卡住之前的程式碼：

function join(arr, str){
   var a = []
   var s = ''
    for (s=1;s<a.length;s+=2){
    	a.push(s)
    }
    
return (a, s)
}
console.log(join ([1,2], '!'))


// 我的心得：

// 在題目中這一句「在陣列的每個元素中間插入一個字串」，其實也意味著「若是陣列只有一個位數，則輸出該位數加上空字串」，
// 或者依我的理解，只輸出那個位數應該也是可以的吧？

// 但我在一開始沒有想到這裡去，只專注在要怎麼把字串插入陣列的中間，然後卡住了，寫出「這到底是三小」的奇怪程式碼。
// 所以這一題，我試著把每一行程式碼寫出來：
// 第一行：寫一個函式叫做 join，會接收兩個參數：一個陣列跟一個字串
// 第二、三行：如果陣列沒有內容，回傳空字串
// 第五行：讓結果為陣列的第一位數
// 第六、七行：執行 for 迴圈，迴圈第一圈，讓結果為陣列第一位數 ＋ 字串符號 ＋ 陣列第二位數; 
// 迴圈第二圈，從「陣列第一位數 ＋ 字串符號 ＋ 陣列第二位數」開始，再加上字串符號 ＋ 陣列第三位數
// 以此類推，迴圈結束後，回傳結果
// 印出 join 函式的內容

// -----------下面第二題-----------

// 我的回答：

function repeat(str, times) {
   var n = ''
   for (i = 0; i < times; i++){
      n += str 
   }
   return n
}
console.log(repeat('a', 5))


// 我卡住之前的程式碼：

function repeat(str, times) {
 var str = ''
   for (i = 1 ; i <= times ; i ++){
      console.log(i)
   }
   return str 
}
console.log(repeat('a', 5));

// 我的心得：
// 這一題有幾個錯誤，迴圈後面的大括號應該要放指令; 不應該用參數來當作變數; 要注意字串是從零位數開始，所以小心長度
// 為了確保我理解了，我把程式碼刪掉重寫了三遍才寫對...

