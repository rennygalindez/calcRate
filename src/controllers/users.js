// Import the models if it's necesary

module.exports = {
  new: (req, res) => {
    res.render('users/new');
  },
  processNew: (req, res) => {},
};
