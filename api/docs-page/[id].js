const data = require('../../data.json');

module.exports = (req, res) => {
  const id = req.query.id || req.params.id;
  const doc = data.find(d => d.id === id);

  if (!doc) {
    res.status(404).send('<h1>Not found</h1>');
  } else {
    res.status(200).send(`
      <h1>${doc.name}</h1>
      <p><a href="${doc.url}" target="_blank">Xem chứng thư</a></p>
    `);
  }
};