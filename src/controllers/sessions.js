// To declare sessions controllers

//

module.exports = {
  showLoginForm: function (req, res) {
    res.render('sessions/showLogingForm');
  },
  processLogin: function (req, res) {
    res.send('TODO');
  },
};
