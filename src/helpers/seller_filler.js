//listo

module.exports = function (adv_sell) {
  let link = adv_sell.actions.public_view;
  let { username } = { ...adv_sell.data.profile };
  let { trade_count, feedback_score, bank_name, min_amount } = {
    ...adv_sell.data,
  };
  return {
    username,
    trade_count,
    feedback_score,
    bank_name,
    min_amount,
    link,
  };
};
// new Intl.NumberFormat('co-CO', {
//   style: 'currency',
//   currency: 'COP',
// }).format(adv_sell.data.min_amount),
