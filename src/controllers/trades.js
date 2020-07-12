// Import the models if it's necesary
const rates = require('../helpers/get_base_rates');
const ratesCalc = require('../helpers/exchage_calc.js');

module.exports = {
  new: async (req, res) => {
    try {
      let { advs_buy, advs_sell, xbx_price } = await rates.getRates();
      let calculations = await ratesCalc(advs_buy, advs_sell, xbx_price);
      res.render('trades/test', { calculations });
    } catch (error) {
      console.log(error);
    }
  },
  processNew: (req, res) => {},
};
