module.exports = (req, res) => {
  const { id } = req.query;

  const data = [
    { id: "CTV25121113", title: "Chứng thư A" },
    { id: "XYZ123", title: "Chứng thư B" }
  ];

  const doc = data.find(d => d.id === id);

  if (!doc) {
    res.status(404).json({ error: "Not found" });
  } else {
    res.status(200).json(doc);
  }
};