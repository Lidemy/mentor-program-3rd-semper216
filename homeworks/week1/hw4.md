## 跟你朋友介紹 Git


蔡哥呀,

步驟一、你要先把你目前所有笑話收集檔案紀錄起來，並且用你習慣好找的方式去分類。檔案最好有統一的格式、檔案類型。

步驟二、要下載進行版本控制的程式，推薦你下載 Cmder full vision 裡面就會 Git 的功能。

步驟三、利用 CLI指令移動到你儲存笑話的資料夾下面，至於如何使用 CLI ，我之前有教 how哥。你可以去問問他。

步驟四、使用 「git init」啟動版本控制功能。

步驟五、用「touch  .gitignore」新增一個邊緣人檔案，如果你有什麼不需要版本控管的檔案可以記錄在裡面。

步驟六、當你建立版本控制後，如果有修改裡面的檔案，你記得使用「 git commit -am " 版本變更說明 " 」，去更新版本；假如你想到一個新笑話，已經新增一個新的檔案在路徑下，記得使用「 git add 新增檔案名稱 」，讓電腦知道你要把一個新檔案加入版本控制。

步驟七、隨時做完改變，commit 或 add 任何檔案後，記得使用「 git status 」確認目前狀況是否都在控管內。



如果蔡哥想跟同好一起編輯這個笑話大全，可以使用　GitHub，步驟如下：

步驟一、申請一個 GitHub 帳號。

步驟二、回本機輸入「 git remote add origin 遠端連結 」，意思是建立 GitHub 遠端 repository 連結。

步驟三、輸入「git push -u origin master」，把目前 origin 版本 推上 GitHub 遠端 repository。

步驟四、如果在 GitHub 和同好有更新版本，想要下載回本機，可以輸入「 git pull origin master 」，指令意思是把遠端 master 的 repository 下載回目前路徑下版本控制的 origin 版本。

步驟五、如果你在 GitHub 發現笑話強者，想把他的檔案下載下來，你可以輸入 「git clone 強者 repository 的網址 」就能下載至本機了。

成為笑話大師吧！

