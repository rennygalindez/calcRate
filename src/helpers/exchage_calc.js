const possible = require('../helpers/is_possible_trade');
const sellerFiller = require('./seller_filler');
const buyerFiller = require('./buyer_filler');
const cop_to_bsf_rate = require('../helpers/get_exchance_rate_cop_to_bsf.js');

module.exports = function exchange_calc(advs_sell, advs_buy, xbx_price) {
  try {
    let trades = [];
    let id = 1;
    advs_sell.forEach((adv_sell) => {
      if (adv_sell.data['temp_price'] === adv_sell.data['temp_price_usd'])
        return; // Jump the iteration because the will wrong!
      const trade = { id, buyers: [] };
      trade['seller'] = sellerFiller(adv_sell);
      advs_buy.forEach((adv_buy) => {
        if (adv_buy.data['temp_price'] === adv_buy.data['temp_price_usd'])
          return; // Jump the iteration because the will wrong!
        let exchange_rate_to_bsf = cop_to_bsf_rate(
          adv_sell,
          adv_buy,
          xbx_price
        );
        trade['buyers'].push(buyerFiller(adv_buy, exchange_rate_to_bsf));
      });
      trades.push(trade);
      ++id;
    });
    return trades;
  } catch (error) {
    console.log(error);
  }
};

//if (!possible.is_possible_trade(500000, adv_buy, advs_buy)) return;
//   let filtered_advs_sell = advs_sell.filter(
// (elements) => elements.data.min_amount <= 500000
// );
