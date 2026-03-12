const QRCode = require('qrcode');
const data = require('../../data.json');

module.exports = async (req, res) => {
  const { id } = req.query;
  const doc = data.find(d => d.id.toLowerCase() === id.toLowerCase().trim());

  if (!doc) return res.status(404).json({ error: 'Không tìm thấy tài liệu' });

  const docLink = `https://${req.headers.host}/api/docs-page/${doc.id}`;
  const qrPng = await QRCode.toBuffer(docLink);

  res.setHeader('Content-Type', 'image/png');
  res.send(qrPng);
};