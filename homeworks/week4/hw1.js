const request = require('request');

request('https://lidemy-book-store.herokuapp.com/books',
  (error, response, body) => { // 箭頭函式，省略 fuction
    const json = JSON.parse(body);
    for (let i = 0; i < 11; i += 1) {
      const BookData = json[i]; // 取出 array 其中一筆物件
      const BookName = BookData.name; // 取出該筆物件屬性 name
      const ID = BookData.id; // eslint-disable-line no-unused-vars
      console.log(`${ID} ${BookName}`); // ES6字符串語法
    }
  });
