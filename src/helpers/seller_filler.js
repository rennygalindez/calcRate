//listo

module.exports = function (adv_sell) {
  return {
    name: adv_sell.data.profile.username,
    trade_count: adv_sell.data.profile.trade_count,
    feedback_score: adv_sell.data.profile.feedback_score,
    public_view: adv_sell.actions.public_view,
    bank_name: adv_sell.data.bank_name,
    min_amount: new Intl.NumberFormat('co-CO', {
      style: 'currency',
      currency: 'COP',
    }).format(adv_sell.data.min_amount),
  };
};
