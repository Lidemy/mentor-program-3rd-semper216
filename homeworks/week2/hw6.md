``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 執行第二行，這是一個 isValid 函式，參數為 arr 。將參數 [3, 5, 8, 13, 22, 35] 輸入 isValid 函式
2. 執行第三行，執行第一個 for 迴圈的啟動判斷，i 為 0，arr.length 為 6，i<arr.length 成立，故執行第一次迴圈內容。
3. 執行第四行迴圈內容，執行 if 條件判斷，arr[0] 為 3 ，arr[0] <= 0 不成立，跳出 if 斷式，執行第二次迴圈啟動判斷，i 加 1
4. 執行第三行，i 為 1，i 為 1，arr.length 為 6，i<arr.length 成立，，故執行第三行迴圈內容 if 判斷式
5. 執行第四行迴圈內容，執行 if 條件判斷，arr[1] 為 5 ，arr[1] <= 0 不成立，跳出 if 斷式，執行第二次迴圈啟動判斷，i 加 1
6. 執行第三行，i 為 2，i 為 2，arr.length 為 6，i<arr.length 成立，，故執行第三行迴圈內容 if 判斷式
7. 執行第四行迴圈內容，執行 if 條件判斷，arr[2] 為 8 ，arr[2] <= 0 不成立，跳出 if 斷式，執行第二次迴圈啟動判斷，i 加 1
8. 執行第三行，i 為 3，arr.length 為 6，i<arr.length 成立，故執行第三行迴圈內容 if 判斷式
9. 執行第四行迴圈內容，執行 if 條件判斷，arr[3] 為 13 ，arr[3] <= 0 不成立，跳出 if 斷式，執行第二次迴圈啟動判斷，i 加 1
10. 執行第三行，i 為 4，arr.length 為 6，i<arr.length 成立，故執行第三行迴圈內容 if 判斷式
11. 執行第四行迴圈內容，執行 if 條件判斷，arr[4] 為 22 ，arr[4] <= 0 不成立，跳出 if 斷式，執行第二次迴圈啟動判斷，i 加 1
12. 執行第三行，i 為 5，arr.length 為 6，i<arr.length 成立，故執行第三行迴圈內容 if 判斷式
13. 執行第四行迴圈內容，執行 if 條件判斷，arr[5] 為 35 ，arr[5] <= 0 不成立，跳出 if 斷式，執行第二次迴圈啟動判斷，i 加 1
14. 執行第三行，i 為 6，arr.length 為 6，i<arr.length 


15. 執行第六行，i 為 2，arr.length 為 6，i<arr.length成立，故執行第一次迴圈
16. 執行第七行迴圈內容，arr[2] 為 8 ，arr[1] + arr[0] 為 8 ，arr[1] !== arr[1] + arr[0] 不成立，跳出 if 判斷式，執行第二次迴圈啟動判斷，i 加 1
17. 執行第六行，i 為 3，arr[3] !== arr[2] + arr[1]，故執行第二次迴圈
18. 執行第七行迴圈內容，arr[3] 為 13 ，arr[2] + arr[1]  為 13 ，arr[3] !== arr[2] + arr[1] 不成立，跳出 if 判斷式，執行第三次迴圈啟動判斷，i 加 1
19. 執行第六行，i 為 4，arr.length 為 6，i<arr.length成立，故執行第三次迴圈
20. 執行第七行迴圈內容，arr[4] 為 22 ，arr[3] + arr[2] 為 21 ，arr[4] !== arr[3] + arr[2] 成立，if 判斷式成立，回傳 'invalid'，執行第四次迴圈啟動判斷，i 加 1
21. 執行第六行，i 為 5，arr.length 為 6，i<arr.length成立，故執行第四次迴圈
22. 執行第七行迴圈內容，arr[5] 為 35 ，arr[4] + arr[3] 為 35 ，arr[5] !== arr[4] + arr[3] 不成立，if 判斷式不成立，跳出 if 判斷式，執行第五次迴圈啟動判斷，i 加 1
23. 執行第六行，i 為 6，arr.length 為 6，，6<arr.length 不成立，故不執行第三行迴圈內容，跳出迴圈。
24. 執行第九行，isValid function 已經有 return value，不會再 return 'valid'

## 筆記
第一個迴圈判斷是否 array 有負數，負數 return 'invalid'
第二個迴圈判斷是否為「費氏數列」，例如:(0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233……)，如果不成立 return 'invalid'；
如果第一個迴圈、第二個迴圈都沒有 return值，則 return 'valid'