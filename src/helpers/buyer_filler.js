//listo

module.exports = function (adv_buyer, exchange_rate_to_bsf) {
  console.log(exchange_rate_to_bsf);
  return {
    name: adv_buyer.data.profile.username,
    trade_count: adv_buyer.data.profile.trade_count,
    feedback_score: adv_buyer.data.profile.feedback_score,
    public_view: adv_buyer.actions.public_view,
    bank_name: adv_buyer.data.bank_name,
    min_amount: new Intl.NumberFormat('ve-VE', {
      style: 'currency',
      currency: 'VEN',
    }).format(adv_buyer.data.min_amount),
    exchange_rate_to_bsf,
  };
};
