// These functions get arrays of seller_adv and buy_adv and filter they and fusion the data in just one structure (data +  data.profile + actions --> data)

let cleanAndFusion = function () {
  let cleanerAdvs = arguments[0]
    .filter((e) => e.data.temp_price !== e.data.temp_price_usd) //remove advertisements with same value in temp_price and temp_price_usd, because it cause erros in rates calculations.
    .map((e) => Object.assign(e.data, e.actions, e.data.profile)); // fusion the objects "data" "data.profile" and "actions", inside just "data" (data + data.profile + acions --> data)
  return cleanerAdvs;
};

module.exports = function () {
  let dirtyAdvs = [...arguments];
  let cleanedAdvs = [];
  dirtyAdvs.forEach((e) => {
    cleanedAdvs.push(cleanAndFusion(e));
  });
  return cleanedAdvs;
};

let otherOption = function () {
  let cleanedAdvs = [];
  let { ...args } = { ...arguments[0] };
  for (key in args) {
    cleanedAdvs.push(cleanAndFusion(args[key]));
  }
  return cleanedAdvs;
};
