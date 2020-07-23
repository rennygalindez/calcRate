//To declare user controllers

//

module.exports = {
  showSingupForm: function (req, res) {
    res.render('users/showSingupForm');
  },
  processSingup: function (req, res) {
    res.send('TODO');
  },
};
