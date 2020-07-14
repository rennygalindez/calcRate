// Function to calculate cop to bsf rate, using www.tradeblock.com BTC/USD rate.

module.exports = function (adv_sell, adv_buy, xbx_price) {
  let usd_seller = adv_sell.data.temp_price / xbx_price;
  let usd_buyer = adv_buy.data.temp_price / xbx_price;
  let exchange_rate_to_bsf = usd_seller / usd_buyer;
  return exchange_rate_to_bsf;
};
