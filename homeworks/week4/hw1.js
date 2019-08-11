const request = require('request');

request('https://lidemy-book-store.herokuapp.com/books',
  (error, response, body) => {
    const json = JSON.parse(body);
    for (let i = 0; i < 11; i += 1) {
      const BookData = json[i];
      const BookName = BookData.name;
      const ID = BookData.id; // eslint-disable-line no-unused-vars
      console.log(`ID: ${BookName}`);
    }
  });
