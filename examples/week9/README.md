# Week9 作業自我檢討

### 注意，本週沒有做檢討，因此以下內容是參考解答，還沒寫完請不要看喔！

.  
.  
.  
.  
.  
.  
.   
.  
.  
.  
.  
.  

## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼

網路上查可以查到很多相關資料，但我個人覺得最重要的一個點在於 VARCHAR 可以設長度但是 TEXT 不行。

意思就是說，當你本來就知道大概會需要多少字元的時候，就用 VARCHAR，真的逼不得已東西很長（例如說要存文章）的時候才用 TEXT，才能節省空間。

## Cookie 跟 Session 不要搞混了

這週其實還沒講到 Session 的概念，為的其實就是希望大家不要搞混。但因為之前 CS101 火球術其實已經提到了，所以反而有點弄巧成拙（？），還是滿多人搞混的。

請大家注意這一週作業問的問題：

> Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又會以什麼形式帶去 Server？

如果是我的話大概會這樣答：

Cookie 是個儲存在瀏覽器的小型文字檔案，在 HTTP 這層 Server 可以透過 Set-Cookie 這個 response header 來讓瀏覽器儲存相對應的 Cookie。而瀏覽器發送 Request 時，會把相對應的 Cookie 放在 `Cookie` 這個 Header，Server 就可以拿到資料。

「相對應的」指的是每一個 Cookie 都有一些選項可以設置，要符合條件才能寫入以及傳送，例如說你無法寫入其他 domain 的 cookie。

所以我這邊在談的是 Cookie 的本質：儲存資料。而另一個重點就是伺服器可以把資料寫在 Cookie，瀏覽器也會幫你把 Cookie 帶給伺服器。

至於其他用途（廣告追蹤、身份驗證）那都是再延伸出去的東西了，其實不是這題的重點。可以當作額外補充，但你要知道的是 Cookie 本身就是個儲存容器，身份驗證是其中的用途之一，但還有其他用途。

## 這週會碰到的問題

這週的作業主要會碰到的問題有兩個（當然還有更多啦，先提兩個）：

1. 密碼存明碼，當駭客入侵把你資料庫偷走之後，你家會員的密碼就全部被駭客知道了，解法在之後會講。
2. 利用 cookie 裡的 user id 來判斷登入的人是誰，我只要把 cookie 裡面的值一改掉，就可以偽造別人身份登入，所以後來才需要改成 session 機制。