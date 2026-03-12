module.exports = (req, res) => {
  const { id } = req.query;

  const data = [
    { id: "CTV25121113", title: "Chứng thư A", content: "Nội dung A" },
    { id: "XYZ123", title: "Chứng thư B", content: "Nội dung B" }
  ];

  const doc = data.find(d => d.id === id);

  if (!doc) {
    res.status(404).send("<h1>Not found</h1>");
  } else {
    res.status(200).send(`<h1>${doc.title}</h1><p>${doc.content}</p>`);
  }
};