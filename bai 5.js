let players = [
  "P001-Nguyễn Văn A-Thủ môn",
  "P003-Trần Thị B-Hậu vệ",
  "P003-Lê Văn C-Hậu vệ",
  "P004-Phạm Văn D-Tiền vệ",
  "P005-Hoàng Thị E-Tiền đạo",
  "P006-Vũ Minh F-Tiền đạo",
  "P007-Đặng Văn G-Thủ môn",
];
function layTatCaViTri() {
  let danhSachViTri = [];
  for (let i = 0; i < players.length; i++) {
    let viTri = players[i].split("-")[2];
    if (!danhSachViTri.includes(viTri)) {
      danhSachViTri.push(viTri);
    }
  }
  return danhSachViTri;
}
function timCauThuTenDaiNhat() {
  let tenDaiNhat = "";

  for (let i = 0; i < players.length; i++) {
    let ten = players[i].split("-")[1];

    if (ten.length > tenDaiNhat.length) {
      tenDaiNhat = ten;
    }
    return tenDaiNhat;
  }
}
function demCauThuTheoChuCaiDau(chuCai) {
  let soLuong = 0;
  let chuCaiTimKiem = chuCai.toLowerCase();

  for (let i = 0; i < players.length; i++) {
    let ten = players[i].split("-")[1];
    if (ten.charAt(0).toLowerCase() === chuCaiTimKiem) {
      soLuong++;
    }
  }
  return soLuong;
}
console.log("Danh sách các vị trí trong đội:", layTatCaViTri());

console.log("Cầu thủ có cái tên dài nhất là:", timCauThuTenDaiNhat());

let kyTu = "N";
console.log(
  `Số cầu thủ có tên bắt đầu bằng chữ '${kyTu}':`,
  demCauThuTheoChuCaiDau(kyTu),
);
