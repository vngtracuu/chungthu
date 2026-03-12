const data = require('../../data.json');

module.exports = (req, res) => {
  const { id } = req.query;
  const doc = data.find(d => d.id.toLowerCase() === id.toLowerCase().trim());

  if (!doc) return res.status(404).json({ error: 'Không tìm thấy tài liệu' });
  res.json(doc);
};