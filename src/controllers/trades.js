// Import the models if it's necesary
const getRates = require('../helpers/get_base_rates');
const ratesCalc = require('../helpers/exchage_calc.js');

module.exports = {
  // Asynchronous handler controller function
  new: async (req, res) => {
    try {
      // get offers and BTC/USD price.
      let { advs_sell, advs_buy, xbx_price } = await getRates();
      // With offers and BTC/USD price, ratesCalc makes the many comparitions
      let trades = await ratesCalc(advs_sell, advs_buy, xbx_price);
      res.render('trades/new', { trades });
    } catch (error) {
      console.log(error);
    }
  },
  processNew: (req, res) => {},
};
