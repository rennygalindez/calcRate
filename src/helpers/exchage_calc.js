const is_possible_trade = require('../helpers/is_possible_trade');
const sellerFiller = require('./seller_filler');
const buyerFiller = require('./buyer_filler');
const cop_to_bsf_rate = require('../helpers/get_exchance_rate_cop_to_bsf.js');
const cleanAdvs = require('../helpers/clean_advs');

module.exports = function exchange_calc(advs_sell, advs_buy, xbx_price) {
  try {
    let [cleaned_advs_sell, cleaned_advs_buy] = cleanAdvs(advs_sell, advs_buy);
    let trades = [];
    let id = 1;
    cleaned_advs_sell.forEach((adv_sell) => {
      const trade = { id, buyers: [] };
      trade['seller'] = sellerFiller(adv_sell);
      cleaned_advs_buy.forEach((adv_buy) => {
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
