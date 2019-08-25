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
if (process.argv[2] === 'read' && process.argv[3].match(/[^\d]/)) {
  console.log('the input ID should be integer');
}
const BookID = process.argv[3];
if (process.argv[2] === 'read' && process.argv[3].match(/\d/)) {
  request(
    `https://lidemy-book-store.herokuapp.com/books/${BookID}`,
    (error, response, body) => { // 箭頭函式，省略 fuction
      if (response.statusCode === 200) {
        const json = JSON.parse(body);
        const BookName = json.name; // 取出該筆物件屬性 name
        const ID = json.id; // eslint-disable-line no-unused-vars
        console.log(`ID:${ID}\tBookName:${BookName}`); // ES6字符串語法
      }
      if (response.statusCode === 404) {
        console.log(`the book of ID ${BookID} dosen't exist`);
      }
    },
  );
}
// delete the book of id
const deleteID = process.argv[3];
if (process.argv[2] === 'delete' && process.argv[3].match(/[^\d]/)) {
  console.log('the input ID should be integer');
}
if (process.argv[2] === 'delete' && process.argv[3].match(/[\d]/)) {
  request.delete(
    `https://lidemy-book-store.herokuapp.com/books/${deleteID}`,
    (error, response) => {
      if (response.statusCode === 200) {
        console.log(`delete the book of ID "${deleteID}" from list successfully`);
      }
      if (response.statusCode === 404) {
        console.log(`the book of ID "${deleteID}" doesn't exist`);
      }
    },
  );
}

// add new book
const addBookName = process.argv[3];
if (process.argv[2] === 'create' && typeof (process.argv[3]) === 'string') {
  request.post(
    {
      url: 'https://lidemy-book-store.herokuapp.com/books',
      form: { name: addBookName },
    },
    (error, response) => {
      if (response.statusCode === 201) {
        console.log(`add the new book "${addBookName}" to list successfully`);
      }
    },
  );
}
