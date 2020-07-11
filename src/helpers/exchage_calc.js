module.exports = function exchange_calc(advs_buy, advs_sell, xbx_price) {
  try {
    let calculated_rates = [];
    let id = 0;
    advs_buy.forEach((adv_buy) => {
      advs_sell.forEach((adv_sell) => {
        if (
          adv_buy.data['temp_price'] === adv_buy.data['temp_price_usd'] ||
          adv_sell.data['temp_price'] === adv_sell.data['temp_price_usd']
        ) {
          return; // Jump the iteration because the will wrong!
        }
        let usd_buy = adv_buy.data.temp_price / xbx_price;
        let usd_seller = adv_sell.data.temp_price / xbx_price;
        let exchange_rate_to_bsf = usd_buy / usd_seller;
        id += 1;
        console.log(id);
        calculated_rates.push({
          buyer: {
            name: adv_buy.data.profile.username,
            trade_count: adv_buy.data.profile.trade_count,
            feedback_score: adv_buy.data.profile.feedback_score,
            public_view: adv_buy.actions.public_view,
            min_amount: new Intl.NumberFormat('co-CO', {
              style: 'currency',
              currency: 'COP',
            }).format(adv_buy.data.min_amount),
          },
          seller: {
            name: adv_sell.data.profile.username,
            trade_count: adv_sell.data.profile.trade_count,
            feedback_score: adv_sell.data.profile.feedback_score,
            public_view: adv_sell.actions.public_view,
            min_amount: new Intl.NumberFormat('ve-VE', {
              style: 'currency',
              currency: 'VEN',
            }).format(adv_sell.data.min_amount),
          },
          id,
          usd_buy,
          usd_seller,
          exchange_rate_to_bsf: exchange_rate_to_bsf.toFixed(7),
          tem_price_buyer: new Intl.NumberFormat('co-CO', {
            style: 'currency',
            currency: 'COP',
          }).format(adv_buy.data.temp_price),
          tem_price_seller: new Intl.NumberFormat('ve-VE', {
            style: 'currency',
            currency: 'VEN',
          }).format(adv_sell.data.temp_price),
          bsf_to_arrive: 100000 / exchange_rate_to_bsf,
        });
      });
    });
    return calculated_rates;
  } catch (error) {
    console.log(error);
  }
};
