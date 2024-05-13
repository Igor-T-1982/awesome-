import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
// import styles from "./Styles";

export const MyComponent = () => {
  // --- 1. сохраняем состояние полученных value через стандартный метод useState
  const [picker1Value, setPicker1Value] = useState("");
  const [picker2Value, setPicker2Value] = useState("");
  const [result, setResult] = useState("");

  // --- 2. получаем из onValueChange выбранный элемент и его значение
  const handlePickerChange = (picker, value) => {
    if (picker === "picker1") {
      setPicker1Value(value);
    } else if (picker === "picker2") {
      setPicker2Value(value);
    }
  };

  // --- 3. создаем массив объектов
  const arr = [
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
      150: 53,
      200: 64,
      250: 70,
      300: 71,
      350: 65,
      400: 52,
      450: 31,
      100: 37,
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

  // --- 4. myFunction ищет соответствия значений выбранных Picker в массиве объектов
  const myFunction = () => {
    for (let obj of arr) {
      if (obj.name == picker1Value && obj.hasOwnProperty(picker2Value)) {
        var element = obj[picker2Value] + " " + "см";
        return element;
      }
    }
    return (element = "Значение не найдено");
  };

  // --- 5. Функция отправки значений,висит на кнопке!
  const buttonSubmit = () => {
    const d = myFunction(arr, picker1Value, picker2Value);
    return setResult(d);
  };
  // ---------возвращаемый блок с разметкой jsx-----------------------
  return (
    <View>
      {/* --------- стандартная функция onValueChange  меняет значение выбранного элемента и передает в State */}
      <Picker
        selectedValue={picker1Value}
        onValueChange={(value) => handlePickerChange("picker1", value)}
        style={styles.picker_box}
      >
        <Picker.Item label="выбери прицел" />
        <Picker.Item label="прицел 1" value="прицел 1" />
        <Picker.Item label="прицел 2" value="прицел 2" />
        <Picker.Item label="прицел 3" value="прицел 3" />
        <Picker.Item label="прицел 4" value="прицел 4" />
        <Picker.Item label="прицел 5" value="прицел 5" />
        <Picker.Item label="прицел 6" value="прицел 6" />
        <Picker.Item label="прицел 7" value="прицел 7" />
        <Picker.Item label="прицел 8" value="прицел 8" />
        <Picker.Item label="прицел 9" value="прицел 9" />
        <Picker.Item label="прицел 10" value="прицел 10" />
      </Picker>

      <Picker
        selectedValue={picker2Value}
        onValueChange={(value) => handlePickerChange("picker2", value)}
        style={styles.picker_box}
      >
        <Picker.Item label="выбери дальность" />
        <Picker.Item label="50 м" value="50" />
        <Picker.Item label="100 м" value="100" />
        <Picker.Item label="150 м" value="150" />
        <Picker.Item label="200 м" value="200" />
        <Picker.Item label="250 м" value="250" />
        <Picker.Item label="300 м" value="300" />
        <Picker.Item label="350 м" value="350" />
        <Picker.Item label="400 м" value="400" />
        <Picker.Item label="450 м" value="450" />
        <Picker.Item label="500 м" value="500" />
        <Picker.Item label="550 м" value="550" />
        <Picker.Item label="600 м" value="600" />
        <Picker.Item label="700 м" value="700" />
        <Picker.Item label="800 м" value="800" />
        <Picker.Item label="900 м" value="900" />
        <Picker.Item label="1000 м" value="1000" />
      </Picker>
      <View>
        <Text style={styles.textPic}>Превышение над точкой прицеливания:</Text>
        <Text style={styles.textPicRes}>{result}</Text>
      </View>
      <View style={styles.box}>
        <Button
          title={"ПОКАЗАТЬ"}
          style={styles.button}
          onPress={buttonSubmit}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    marginLeft: 10,
  },
  picker_box: {
    width: "90%",
    marginBottom: "5vh",
    marginLeft: "5vw",
  },
  textPic: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  textPicRes: {
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
});
