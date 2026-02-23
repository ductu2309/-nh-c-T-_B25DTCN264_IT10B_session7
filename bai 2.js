let playerIds = ["P001", "P002", "P003", "P004", "P005"];
let playerNames = [
    "Nguyễn Văn A",
    "Trần thị B",
    "Lê Văn C",
    "Phạm Văn D",
    "Hoàng Thị E",
];
let playerJerseyNumbers = [10, 7, 8, 9, 11];

let input = prompt("Nhập mã cầu thủ muốn cập nhật");
let flag = false;

for(let i = 0; i< playerIds.length; i++){
    if(input === playerIds[i]){
        let name = prompt("Nhập tên mới cho cầu thủ");
        let jerseyNumber = +prompt("Nhập số áo mới cho cầu thủ (1-99)");
        while(jerseyNumber < 1 || jerseyNumber > 99 || isNaN(jerseyNumber) || !Number.isInteger(jerseyNumber)){
            jerseyNumber = +prompt("Số áo nhập không hợp lệ! Vui lòng nhập lại");
        }
        
        

        let result = updatePlayerNameAndJersey(input , name ,jerseyNumber );
        if(result){
            console.log("Đã cập nhật thành công cầu thủ ở danh sách");
            
        }

        playerNames[i] = name;
        playerJerseyNumbers[i] = jerseyNumber;
        flag = true;
        break;
    }
}
if(!flag){
    alert("Không tìm thấy Mã cầu thủ này");
}

function printTeamRoster() {
    for(let i = 0 ; i< playerIds.length; i++){
        console.log(`
            ${i+1}. Mã: ${playerIds[i]} - Tên: ${playerNames[i]} - Số áo: ${playerJerseyNumbers[i]}`);
    }
}

printTeamRoster();


function updatePlayerNameAndJersey(playerId, newName, newJerseyNumber) {
    for(let i = 0; i< playerIds.length; i++){
        if(playerIds[i] === playerId){
            playerNames[i] = newName;
            playerJerseyNumbers[i] = newJerseyNumber;
            return true;
        }  
    }
    return false;
}