### 交作業流程

> 1、將作業檔案下載至 local 端後，建立寫作業用的新 branch 取名 week1，不直接在 master 進行編輯。

> 2、利用 checkout 指令，從 master 移動至 week1 branch，開啟檔案寫作業。

> 3、 作業完成儲存後，需要利用 Git 將檔案最後的改變建立一新版本，這裡git會檢查程式碼正確才能 commit，檢查 git status 皆加入版本控制。

> 4、將commit最新版本的branch，push至GitHub上的 remote week1 branch。

> 5、開啟GitHub mentor-program-3rd-個人帳號之 repository，點選 week1 branch 右上角綠色按鈕「Clone&download」進入 Open a pull request 頁面，base 是master，compare是week1，內文可撰寫心得或問題。

> 6、另開 Lidemy頁面 「mentor-program-3rd」 的 repository，建立一個標題符合規範的新 issue，格式為 [Week1]，內文放入自己帳號下的 repository 及說明。

> 7、老師會到 「mentor-program-3rd-個人帳號」的 repository 批改作業，如果作業沒有問題，會根據 request 直接 merge week1 branch 至 master，並且刪除week1 branch 及 Lidemy的交作業 issue。

> 8、回到本機 git，checkout 到 master，把已被 merge 至 master 的最新版本 pull 下來。

> 9、將 local week1 branch 刪除。
