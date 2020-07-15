// Import the models if it's necesary
const getRates = require('../helpers/get_base_rates');
const ratesCalc = require('../helpers/exchage_calc.js');

module.exports = {
  // Asynchronous handler controller function

  new: (req, res) => {
    res.render('trades/new');
  },
  processNew: async (req, res) => {
    try {
      let { myAmount } = { ...req.body };
      // get advertising and BTC/USD price.
      let { advs_sell, advs_buy, xbx_price } = await getRates();
      // With offers and BTC/USD price, ratesCalc makes the many comparitions
      let trades = await ratesCalc(advs_sell, advs_buy, xbx_price, myAmount);
      res.render('trades/list_trades', { trades });
    } catch (error) {
      console.log(error);
    }
  },
};
