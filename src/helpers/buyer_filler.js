//listo

module.exports = function (adv_buyer, exchange_rate_to_bsf) {
  let {
    username,
    trade_count,
    feedback_score,
    bank_name,
    min_amount,
    public_view,
  } = {
    ...adv_buyer,
  };
  return {
    username,
    trade_count,
    feedback_score,
    bank_name,
    min_amount,
    exchange_rate_to_bsf,
    public_view,
  };
};
