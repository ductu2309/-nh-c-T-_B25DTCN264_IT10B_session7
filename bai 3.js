let players = [];
function printTeamRoster() {
  console.log("Danh sách cầu thủ");
  console.log("Đội bóng hiện tại (" + players.length + " cầu thủ): ");
  for (let i = 0; i < players.length; i++) {
    let string = players[i].split("-");
    console.log(
      i +
        1 +
        ". Mã: " +
        string[0] +
        " - Tên: " +
        string[1] +
        " - Vị trí: " +
        string[2],
    );
  }
}

function pushPlayer(id, name, position) {
  players.push(id + "-" + name + "-" + position);
}

let numberPlayer = +prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng?");
if (numberPlayer < 0 || numberPlayer > 99) {
  console.log("Số cầu thủ không hợp lệ!");
} else {
  for (let i = 0; i < numberPlayer; i++) {
    let id = prompt(`Nhập mã cầu thủ thứ ${i + 1}`);

    let name = prompt(`Nhập tên cầu thủ thứ ${i + 1} (không để trống): `);
    if (name === null || name.trim() === "") {
      alert("Không được để trống tên cầu thủ!");
      i--;
      continue;
    }

    let position = +prompt(
      `Nhập vị trí cầu thủ thứ ${i + 1} chọn số: 
      1=Thủ môn
      2=Hậu vệ
      3=Tiền vệ
      4=Tiền đạo): `,
    );
    let findPosition = "";

    if (position < 1 || position > 4) {
      alert("Không hợp lệ!");
      i--;
      continue;
    } else {
      if (position === 1) {
        findPosition = "Thủ môn";
      } else if (position === 2) {
        findPosition = "Hậu vệ";
      } else if (position === 3) {
        findPosition = "Tiền vệ";
      } else if (position === 4) {
        findPosition = "Tiền đạo";
      }
      pushPlayer(id, name, findPosition);
    }
  }
  printTeamRoster();
}
