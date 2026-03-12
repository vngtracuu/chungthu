const data = require('../../data.json');

module.exports = (req, res) => {
  const id = req.query.id || req.params.id;
  const doc = data.find(d => d.id === id);

  if (!doc) {
    res.status(404).json({ error: 'Not found' });
  } else {
    res.status(200).json(doc);
  }
};
