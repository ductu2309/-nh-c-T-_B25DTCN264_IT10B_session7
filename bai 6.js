let danhSach = [
  "P001-Nguyễn Văn A-Thủ môn",
  "P003-Trần Thị B-Hậu vệ",
  "P003-Lê Văn C-Hậu vệ",
  "P004-Phạm Văn D-Tiền vệ",
  "P005-Hoàng Thị E-Tiền đạo",
  "P006-Vũ Minh F-Tiền đạo",
  "P007-Đặng Văn G-Thủ môn",
];
function layTenNganNhat() {
  let tamTinh = danhSach[0].split("-");
  let tenNganNhat = tamTinh[1];
  for (let i = 1; i < danhSach.length; i++) {
    let tungNguoi = danhSach[i].split("-");
    let tenHienTai = tungNguoi[1];
    if (tenHienTai.length < tenNganNhat.length) {
      tenNganNhat = tenHienTai;
    }
  }
  return tenNganNhat;
}
function demViTriCoDoDaiLonHon(doDaiYeuCau) {
  let soLuong = 0;

  for (let i = 0; i < danhSach.length; i++) {
    let tungNguoi = danhSach[i].split("-");
    let viTri = tungNguoi[2];
    if (viTri.length > doDaiYeuCau) {
      soLuong++;
    }
  }
  return soLuong;
}
console.log("Tên ngắn nhất trong đội là: " + layTenNganNhat());

console.log("Số cầu thủ có tên vị trí dài hơn 6 ký tự là: ", demViTriCoDoDaiLonHon(6));
