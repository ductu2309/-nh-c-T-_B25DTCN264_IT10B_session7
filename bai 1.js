let playerIds = [];
let playerPositions = [];

let manyPlayers = +prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng? ");
if (isNaN(manyPlayers) || manyPlayers <= 0) {
  alert("Vui lòng nhập sô nguyên dương > 0 !!!!!");
} else {
  for (let i = 1; i <= manyPlayers; i++) {
    let ID;
    while (true) {
      ID = prompt("Nhập mã cầu thủ thứ " + " " + i);
      if (ID === "") {
        alert("Mã sách không được để trống!!!");
        continue;
      }

      let flag = false;
      for (let j = 0; j < playerIds.length; j++) {
        if (playerIds[j] === ID) {
          flag = true;
          break;
        }
      }
      if (flag) {
        alert(`Mã sách ${ID} đã tồn tại vui lòng nhập mã khác!!!!`);
      } else {
        alert(`Tạo mã sách ${ID} thành công.`);
        break;
      }
    }

    let location;
    let newLocation = "";
    while (true) {
      location = +prompt(`
            chọn vị trí cầu thủ thứ ${i}:
            1. Thủ môn
            2. Hậu vệ
            3. Tiền vệ
            4. Tiền đạo
            `);
      if (location === "" || isNaN(location)) {
        alert("Vui lòng không được để trống và không được nhập chữ!!!!");
        continue;
      }

      if (location === 1) {
        newLocation = "Thủ môn";
      } else if (location === 2) {
        newLocation = "Hậu vệ";
      } else if (location === 3) {
        newLocation = "tiền vệ";
      } else if (location === 4) {
        newLocation = "Tiền đạo";
      }
      break;
    }
    playerIds.push(ID);
    playerPositions.push(newLocation);
  }
  printTeamRoster();
}
function printTeamRoster() {
  console.log(`Đội bóng hiện tại có (${manyPlayers} cầu thủ)`);
  for (let j = 0; j < playerIds.length; j++) {
    console.log(`${j + 1}. ${playerIds[j]} - ${playerPositions[j]}`);
  }
}