module.exports = {
  is_possible_trade: function (my_amount, adv_buyer, adv_seller) {
    console.log('Aqui estoy!!!!');
    let btc_min_buyer_amount_cop =
      adv_buyer.data.min_amount / adv_buyer.data.temp_price;
    let btc_min_seller_amount_bsf =
      adv_seller.data.min_amount / adv_seller.data.temp_price;
    let my_amount_to_buyer_btc = my_amount / adv_buyer.data.temp_price;
    console.log(
      adv_buyer.data.profile.username,
      btc_min_buyer_amount_cop,
      btc_min_seller_amount_bsf,
      my_amount_to_buyer_btc
    );
    if (
      my_amount_to_buyer_btc >= btc_min_buyer_amount_cop &&
      my_amount_to_buyer_btc >= btc_min_seller_amount_bsf
    ) {
      return true;
    }
    return false;
  },
};
