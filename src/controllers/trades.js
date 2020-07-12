// Import the models if it's necesary
const rates = require('../helpers/get_base_rates');
const ratesCalc = require('../helpers/exchage_calc.js');

module.exports = {
  // Asynchronous handler controller function
  new: async (req, res) => {
    try {
      // get offers and BTC/USD price.
      let { advs_buy, advs_sell, xbx_price } = await rates.getRates();
      // With offers and BTC/USD price, ratesCalc makes the many comparitions
      let calculations = await ratesCalc(advs_buy, advs_sell, xbx_price);
      res.render('trades/test', { calculations });
    } catch (error) {
      console.log(error);
    }
  },
  processNew: (req, res) => {},
};
