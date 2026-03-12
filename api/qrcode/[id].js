const QRCode = require("qrcode");

module.exports = async (req, res) => {
  const { id } = req.query;

  const data = [
    { id: "CTV25121113", title: "Chứng thư A" },
    { id: "XYZ123", title: "Chứng thư B" }
  ];

  const doc = data.find(d => d.id === id);

  if (!doc) {
    res.status(404).json({ error: "Not found" });
    return;
  }

  try {
    const qr = await QRCode.toDataURL(JSON.stringify(doc));
    res.status(200).send(`<img src="${qr}" />`);
  } catch (err) {
    res.status(500).json({ error: "QR generation failed" });
  }
};