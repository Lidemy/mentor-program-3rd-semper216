const request = require('request');
const process = require('process');

// input list return 20 books
if (process.argv[2] === 'list') {
  request(
    'https://lidemy-book-store.herokuapp.com/books?_limit20',
    (error, response, body) => { // 箭頭函式，省略 fuction
      const json = JSON.parse(body);
      for (let i = 0; i < 20; i += 1) {
        const BookData = json[i]; // 取出 array 其一筆物件
        const BookName = BookData.name; // 取出該筆物件屬性 name
        const ID = BookData.id; // eslint-disable-line no-unused-vars
        console.log(`${ID} ${BookName}`); // ES6字符串語法
      }
    },
  );
}
// input ID return the book name of id
if (process.argv[2] === 'read' && process.argv[3].match(/[^\d]/)) { // 輸入錯誤 read 指令，id 非數字
  console.log('the input ID should be integer');
}
const BookID = process.argv[3];
if (process.argv[2] === 'read' && process.argv[3].match(/\d/)) { // 輸入正確 read 指令
  request(
    `https://lidemy-book-store.herokuapp.com/books/${BookID}`,
    (error, response, body) => { // 箭頭函式，省略 fuction
      if (response.statusCode === 200) {
        const json = JSON.parse(body);
        const BookName = json.name; // 取出該筆物件屬性 name
        const ID = json.id; // eslint-disable-line no-unused-vars
        console.log(`${ID}\t${BookName}`); // ES6字符串語法
      }
      if (response.statusCode === 404) { // read 失敗，找不到對應 id
        console.log(`the book of ID ${BookID} dosen't exist`);
      }
    },
  );
}
// delete the book of id
const deleteID = process.argv[3];
if (process.argv[2] === 'delete' && process.argv[3].match(/[^\d]/)) { // 輸入錯誤 delete 指令，id 非數字
  console.log('the input ID should be integer');
}
if (process.argv[2] === 'delete' && process.argv[3].match(/[\d]/)) { // 輸入正確 delete 指令
  request.delete(
    `https://lidemy-book-store.herokuapp.com/books/${deleteID}`,
    (error, response) => {
      if (response.statusCode === 200) { // 成功刪除單筆資料
        console.log(`delete the book of ID "${deleteID}" from list successfully`);
      }
      if (response.statusCode === 404) { // 刪除失敗，找不到 id
        console.log(`the book of ID "${deleteID}" doesn't exist`);
      }
    },
  );
}

// add new book
const addBookName = process.argv[3];
if (process.argv[2] === 'create' && typeof (process.argv[3]) === 'string') { // 輸入正確 create 指令
  request.post(
    {
      url: 'https://lidemy-book-store.herokuapp.com/books',
      form: { name: addBookName },
    },
    (error, response) => {
      if (response.statusCode === 201) { // 成功新增資料
        console.log(`add the new book "${addBookName}" to list successfully`);
      }
    },
  );
}
// update new name of book
const UpdateName = process.argv[4];
const UpdateId = process.argv[3];
if (process.argv[2] === 'update' && process.argv[3].match(/[^\d]/)) {
  console.log('the input after "update" should be book ID');
}
if (process.argv[2] === 'update' && process.argv[3].match(/[\d]/) && typeof (process.argv[4]) === 'string') { // 輸入正確 update 指令
  request.patch(
    {
      url: `https://lidemy-book-store.herokuapp.com/books/${UpdateId}`,
      form: { name: UpdateName },
    },
    (error, response) => {
      if (response.statusCode === 200) { // 成功更新資料
        console.log(`update the book of id ${UpdateId} with new name "${UpdateName}"`);
      }
    },
  );
}
