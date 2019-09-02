const request = require('request'); // OAuth redirect URI for Twich APP 'GetGameDataLidemy'

const options = {
  url: 'https://api.twitch.tv/helix/games/top', // Get Top Games on Twitch
  method: 'GET',
  headers: {
    'Client-ID': '4ob8adni9qmok9rqrxk8e48mw8eo7c', // TWITCH_CLIENT_ID
  },
};

request(options,
  (error, response, body) => {
    console.log(response.statusCode);
    const json = JSON.parse(body);
    const GameData = json.data;
    for (let i = 0; i < 10; i += 1) { // get 10 game by order
      const data = GameData[i];
      const GameID = data.id;
      const GameName = data.name;
      console.log(`${GameID} ${GameName}`);
    }
  });
