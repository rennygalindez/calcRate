//Whit this code we'll get  BTC/USD rate from https://tradeblock.com and users
//(first 50 Sellers and buyers) from https://localbitcoins.com with active offers

const axios = require('axios');
const baseUrl = `https://localbitcoins.com/`;

module.exports = function () {
  // At this moment I dont know if this is the best way to get and export obtained values
  return Promise.all([
    axios.get(`${baseUrl}buy-bitcoins-online/CO/colombia/.json`),
    axios.get(`${baseUrl}sell-bitcoins-online/VE/Venezuela/.json`),
    axios.get('https://tradeblock.com/api/v1.1/index_vals?index=xbx'),
  ])
    .then((rates) => {
      let advs_sell = rates[0].data['data']['ad_list'];
      let advs_buy = rates[1].data['data']['ad_list'];
      let xbx_price = rates[2].data['xbx'];
      return { advs_sell, advs_buy, xbx_price };
    })
    .catch((error) => {
      console.log(error);
    });
};
