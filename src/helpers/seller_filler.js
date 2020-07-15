//listo

module.exports = function (adv_sell) {
  let {
    username,
    trade_count,
    feedback_score,
    bank_name,
    min_amount,
    public_view,
  } = {
    ...adv_sell,
  };
  return {
    username,
    trade_count,
    feedback_score,
    bank_name,
    min_amount,
    public_view,
  };
};
