let players = [
  "P001-Nguyễn Văn A-Thủ môn",
  "P003-Trần Thị B-Hậu vệ",
  "P003-Lê Văn C-Hậu vệ",
  "P004-Phạm Văn D-Tiền vệ",
  "P005-Hoàng Thị E-Tiền đạo",
  "P006-Vũ Minh F-Tiền đạo",
  "P007-Đặng Văn G-Thủ môn",
];

function printTeamRoster() {
  console.log("Danh sách cầu thủ:");
  for (let i = 0; i < players.length; i++) {
    let arr = players[i].split("-");
    console.log(arr[0] + "|" + arr[1] + "|" + arr[2]);
  }
}

printTeamRoster();

function countPlayerByPosition(players) {
  let countThuMon = 0;
  let countHauVe = 0;
  let countTienVe = 0;
  let countTienDao = 0;
  for (let i = 0; i < players.length; i++) {
    let arr = players[i].split("-");
    let position = arr[2];
    if (position === "Thủ môn") {
      countThuMon++;
    } else if (position === "Hậu vệ") {
      countHauVe++;
    } else if (position === "Tiền vệ") {
      countTienVe++;
    } else {
      countTienDao++;
    }
  }
  console.log("Thủ môn: ", countThuMon);
  console.log("Hậu vệ: ", countHauVe);
  console.log("Tiền vệ: ", countTienVe);
  console.log("Tiền đạo: ", countTienDao);
}
countPlayerByPosition(players);

function hasGoalkeeper() {
  for (let i = 0; i < players.length; i++) {
    let arr = players[i].split("-");
    let position = arr[2];
    if (position === "Thủ môn") {
      return true;
    }
  }
  return false;
}

console.log("Đội có thủ môn không?", hasGoalkeeper());
