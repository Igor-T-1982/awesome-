import React from "react";

const matrix = [
  { name: "прицел 1", 50: 0, 100: 0, 150: -3, 200: -10 },
  { name: "прицел 2", 50: 3, 100: 5, 150: 5, 200: 0, 250: -10, 300: -25 },
  {
    name: "прицел 3",
    50: 6,
    100: 13,
    150: 17,
    200: 16,
    250: 11,
    300: 0,
    350: -17,
    400: -43,
  },
  {
    name: "прицел 4",
    50: 11,
    100: 24,
    150: 33,
    200: 38,
    250: 37,
    300: 32,
    350: 20,
    400: 0,
    450: -27,
    500: -65,
  },
  {
    name: "прицел 5",
    50: 18,
    100: 37,
    150: 53,
    200: 64,
    250: 70,
    300: 71,
    350: 65,
    400: 52,
    450: 31,
    500: 0,
    550: -42,
    600: -98,
  },
  {
    name: "прицел 6",
    100: 54,
    200: 97,
    300: 120,
    400: 120,
    500: 82,
    600: 0,
    700: -15,
    800: -370,
  },
  {
    name: "прицел 7",
    100: 75,
    200: 140,
    300: 180,
    400: 200,
    500: 190,
    600: 130,
    700: 0,
    800: -210,
    900: -520,
  },
  {
    name: "прицел 8",
    100: 100,
    200: 190,
    300: 270,
    400: 310,
    500: 320,
    600: 290,
    700: 190,
    800: 0,
    900: -290,
    1000: -700,
  },
  {
    name: "прицел 9",
    100: 140,
    200: 220,
    300: 360,
    400: 440,
    500: 480,
    600: 480,
    700: 410,
    800: 260,
    900: 0,
    1000: -380,
  },
  {
    name: "прицел 10",
    100: 170,
    200: 330,
    300: 480,
    400: 590,
    500: 570,
    600: 710,
    700: 680,
    800: 560,
    900: 340,
    1000: 0,
  },
];

const matrixTwo = [
  { name: "прицел 1", 50: 0, 100: 0, 150: -7, 200: -20 },
  { name: "прицел 2", 50: 5, 100: 10, 150: 9, 200: 0, 250: -17, 300: -45 },
  {
    name: "прицел 3",
    50: 13,
    100: 25,
    150: 31,
    200: 30,
    250: 20,
    300: 0,
    350: -31,
    400: -77,
  },
  {
    name: "прицел 4",
    50: 22,
    100: 44,
    150: 60,
    200: 69,
    250: 68,
    300: 57,
    350: 35,
    400: 0,
    450: -52,
    500: -123,
  },
  {
    name: "прицел 5",
    50: 34,
    100: 68,
    150: 96,
    200: 116,
    250: 127,
    300: 129,
    350: 119,
    400: 95,
    450: 55,
    500: 0,
    550: -83,
    600: -187,
  },
  {
    name: "прицел 6",
    100: 98,
    200: 180,
    300: 220,
    400: 210,
    500: 140,
    600: 0,
    700: -270,
    800: -640,
  },
  {
    name: "прицел 7",
    100: 130,
    200: 250,
    300: 330,
    400: 360,
    500: 330,
    600: 210,
    700: 0,
    800: -350,
    900: -840,
  },
  {
    name: "прицел 8",
    100: 180,
    200: 340,
    300: 460,
    400: 540,
    500: 550,
    600: 470,
    700: 300,
    800: 0,
    900: -450,
    1000: -1050,
  },
];

//=========переменные из select 5,45
const btn1 = document.querySelector(".btn_1");
let itog1 = document.querySelector(".itog_1");
let select_1 = document.querySelector(".select_1");
let select_2 = document.querySelector(".select_2");
let rec1 = select_1.value;
let searchValue1 = select_2.value;
let popr1 = "";

select_1.onchange = () => {
  rec1 = select_1.value;
};
select_2.onchange = () => {
  searchValue1 = select_2.value;
};

btn1.addEventListener("click", () => {
  findMatchInObject(matrix, rec1, searchValue1);
  function findMatchInObject(matrix, rec1, searchValue1) {
    for (let obj of matrix) {
      if (obj.name === rec1 && obj.hasOwnProperty(searchValue1)) {
        popr1 =
          obj.name +
          " " +
          `дист:${searchValue1} ` +
          "превышение:" +
          " " +
          obj[searchValue1];
        return popr1;
      }
    }
    return "Значение не найдено!";
  }
  itog1.innerHTML = `<h3>${popr1}</h3>`;
});

// -----------------для 7.62-------------------

const btn2 = document.querySelector(".btn_2");
let itog2 = document.querySelector(".itog_2");
let select_3 = document.querySelector(".select_3");
let select_4 = document.querySelector(".select_4");
let rec2 = select_3.value;
let searchValue2 = select_4.value;
let popr2 = "";

select_3.onchange = () => {
  rec2 = select_3.value;
};
select_4.onchange = () => {
  searchValue2 = select_4.value;
};

btn2.addEventListener("click", () => {
  findMatchInObjectTwo(matrixTwo, rec2, searchValue2);
  function findMatchInObjectTwo(matrixTwo, rec2, searchValue2) {
    for (let obj of matrixTwo) {
      if (obj.name === rec2 && obj.hasOwnProperty(searchValue2)) {
        popr2 =
          obj.name +
          " " +
          `дист:${searchValue2} ` +
          "превышение:" +
          " " +
          obj[searchValue2];
        return popr2;
      }
    }
    return "Значение не найдено!";
  }
  itog2.innerHTML = `<h3>${popr2}</h3>`;
});
