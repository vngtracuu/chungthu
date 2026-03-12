const QRCode = require('qrcode');
const data = require('../../data.json');

module.exports = async (req, res) => {
  const { id } = req.query;
  const doc = data.find(d => d.id.toLowerCase() === id.toLowerCase().trim());

  if (!doc) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.send('<h2 style="color:red;text-align:center;">Không tìm thấy tài liệu</h2>');
  }

  const previewUrl = doc.url.replace('/view?usp=sharing', '/preview');
  const docLink = `https://${req.headers.host}/api/docs-page/${doc.id}`;
  const qrImage = await QRCode.toDataURL(docLink);

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(`
    <h1 style="text-align:center;">Chứng Thư Định Giá VNG</h1>
    <p><strong>Mã:</strong> ${doc.id}</p>
    <p><strong>Tên tài liệu:</strong> ${doc.name}</p>
    <iframe src="${previewUrl}" width="100%" height="600px"></iframe>
    <p><a href="${doc.url}" download>Tải tài liệu gốc</a></p>
    <div style="text-align:center;margin-top:30px;">
      <h2>QR Code</h2>
      <img src="${qrImage}" alt="QR Code" />
      <p style="color:blue;">Bạn đang xem chứng thư với phân quyền cấp 2</p>
    </div>
  `);
};
