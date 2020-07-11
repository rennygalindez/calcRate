//
//
const axios = require('axios');
const baseUrl = `https://localbitcoins.com/`;

module.exports = {
  getRates: function () {
    return Promise.all([
      axios.get(`${baseUrl}buy-bitcoins-online/CO/colombia/.json`),
      axios.get(`${baseUrl}sell-bitcoins-online/VE/Venezuela/.json`),
      axios.get('https://tradeblock.com/api/v1.1/index_vals?index=xbx'),
    ])
      .then((rates) => {
        let advs_buy = rates[0].data['data']['ad_list'];
        let advs_sell = rates[1].data['data']['ad_list'];
        let xbx_price = rates[2].data['xbx'];
        return { advs_buy, advs_sell, xbx_price };
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

// const baseUrl = 'https://localbitcoins.com/';
// let [buy, sell, xbx_response] = await Promise.all([
//   axios.get(`${baseUrl}buy-bitcoins-online/CO/colombia/.json`),
//   axios.get(`${baseUrl}sell-bitcoins-online/VE/Venezuela/.json`),
//   axios.get('https://tradeblock.com/api/v1.1/index_vals?index=xbx'),
// ]);

// let advs_buy = buy.data['data']['ad_list'];
// let advs_sell = sell.data['data']['ad_list'];
// let xbx_price = xbx_response.data['xbx'];
