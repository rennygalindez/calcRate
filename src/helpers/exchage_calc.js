module.exports = function exchange_calc(advs_buy, advs_sell, xbx_price) {
  try {
    let trades = [];
    let id = 1;
    advs_buy.forEach((adv_buy) => {
      if (adv_buy.data['temp_price'] === adv_buy.data['temp_price_usd']) return; // Jump the iteration because the will wrong!
      const trade = { id, sellers: [] };
      trade['buyer'] = {
        name: adv_buy.data.profile.username,
        trade_count: adv_buy.data.profile.trade_count,
        feedback_score: adv_buy.data.profile.feedback_score,
        public_view: adv_buy.actions.public_view,
        bank_name: adv_buy.data.bank_name,
        min_amount: new Intl.NumberFormat('co-CO', {
          style: 'currency',
          currency: 'COP',
        }).format(adv_buy.data.min_amount),
      };
      advs_sell.forEach((adv_sell) => {
        if (adv_sell.data['temp_price'] === adv_sell.data['temp_price_usd'])
          return; // Jump the iteration because the will wrong!
        let usd_buy = adv_buy.data.temp_price / xbx_price;
        let usd_seller = adv_sell.data.temp_price / xbx_price;
        let exchange_rate_to_bsf = usd_buy / usd_seller;
        trade['sellers'].push({
          name: adv_sell.data.profile.username,
          trade_count: adv_sell.data.profile.trade_count,
          feedback_score: adv_sell.data.profile.feedback_score,
          public_view: adv_sell.actions.public_view,
          bank_name: adv_sell.data.bank_name,
          min_amount: new Intl.NumberFormat('ve-VE', {
            style: 'currency',
            currency: 'VEN',
          }).format(adv_sell.data.min_amount),
          usd_buy,
          usd_seller,
          exchange_rate_to_bsf,
        });
        console.log(trade);
      });
      trades.push(trade);
      ++id;
    });
    return trades;
  } catch (error) {
    console.log(error);
  }
};
