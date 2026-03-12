const QRCode = require('qrcode');
const data = require('../../data.json');

module.exports = async (req, res) => {
  const id = req.query.id || req.params.id;
  const doc = data.find(d => d.id === id);

  if (!doc) {
    res.status(404).json({ error: 'Not found' });
    return;
  }

  try {
    const qr = await QRCode.toDataURL(doc.url);
    res.status(200).send(`<h1>${doc.name}</h1><img src="${qr}" />`);
  } catch (err) {
    res.status(500).json({ error: 'QR generation failed' });
  }
};