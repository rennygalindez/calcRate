const sellerFiller = require('./seller_filler');
const buyerFiller = require('./buyer_filler');
const cop_to_bsf_rate = require('../helpers/get_exchance_rate_cop_to_bsf.js');
const cleanAdvs = require('../helpers/clean_advs');

module.exports = function exchange_calc(
  advs_sell,
  advs_buy,
  xbx_price,
  myAmount
) {
  try {
    let [cleaned_advs_sell, cleaned_advs_buy] = cleanAdvs(advs_sell, advs_buy);
    cleaned_advs_sell = cleaned_advs_sell.filter(
      (e) => parseInt(myAmount) >= parseInt(e.min_amount)
    ); // TODO - I want to include this filter inside cleanAdvs function.

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
