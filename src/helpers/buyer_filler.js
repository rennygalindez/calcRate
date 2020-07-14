//listo

module.exports = function (adv_buyer, exchange_rate_to_bsf) {
  let link = adv_buyer.actions.public_view;
  let { username } = { ...adv_buyer.data.profile };
  let { trade_count, feedback_score, bank_name, min_amount } = {
    ...adv_buyer.data,
  };
  return {
    username,
    trade_count,
    feedback_score,
    bank_name,
    min_amount,
    exchange_rate_to_bsf,
    link,
  };
};
