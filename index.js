// // Tính tổng các các phần tử trong các mảng sau:
// const firstArray = [10, 43, 98, 34, 19, 40];
// let result_1=0;
// for (let i = 0; i < firstArray.length; i++) {
//     result_1 += firstArray[i]

// }
// const secondArray = [10, 43, 28, 44, 11, 20];
// let result_2=0;
// for (let i = 0; i < secondArray.length; i++) {
//     result_2 += secondArray[i]

// }
// const thirdArray = [140, 4243, 98, 34, 19, 420];
// let result_3=0;
// for (let i = 0; i < thirdArray.length; i++) {
//     result_3 += thirdArray[i]

// }

// console.log("result_1: ", result_1);
// console.log("result_2: ", result_2);
// console.log("result_3: ", result_3);

// Ccas loại function trong javsscript
// 1. Function declaration
function getFullName(firstName, lastName) {
  console.log(firstName, lastName);
}

// 2. Function expression
const getEmail = function (email) {
  return email;
};
console.log("Email của tôi là: ", getEmail("nva@gmail.com"));

// 3. Arrow function
const getFullAddress = (addressDetail, province, ward, couuntry) => {
  return `${addressDetail}, ${province}, ${ward}, ${couuntry}`;
};
console.log(
  ("Địa chỉ: ",
  getFullAddress(
    "123 Đường Cầu Giấy",
    "Phường Dịch Vọng",
    "TP. HN",
    "Việt Nam",
  )),
);

const sum = (firstNumber, secondNumber) => firstNumber + secondNumber;

console.log("Sum: ", sum(10, 20));

// Tính tổng các các phần tử trong các mảng sau:
const firstArray = [10, 43, 98, 34, 19, 40];

// Yêu cầu: Xây dựng hàm, có tham số là magr cần tính, trả về tổng các phần tử
function tinhTongMang(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}   
console.log("Tổng các phần tử là:", tinhTongMang(firstArray));
