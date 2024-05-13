import React, { useState, useContext, createContext } from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "./Styles";
// import { Matrix } from "./Matrix";

// const PickerSelect = () => {
//   const [name, setSelectedValue] = useState("");
//   return (
//     <View style={styles.box}>
//       <Picker
//         style={styles.picker_box}
//         //   selectedValue={name}
//         onValueChange={(itemValue) => setSelectedValue(itemValue)}
//       >
//         <Picker.Item label="прицел 1" name="прицел 1" />
//         <Picker.Item label="прицел 2" name="прицел 2" />
//       </Picker>
//       <Matrix name={name} />
//       {/* {console.log(name)} */}
//     </View>
//   );
// };
const PickerSelect2 = () => {
  const [selectValue, setSelectValue] = useState();
  return (
    <View style={styles.box}>
      <Picker
        style={styles.picker_box}
        //selectValue={selectValue}
        onValueChange={(itemValue) => setSelectValue(itemValue)}
      >
        <Picker.Item label="50" value={50} />
        <Picker.Item label="100" value={100} />

        {/* {console.log(selectedValue)} */}
      </Picker>
      <Matrix selectValue={selectValue} />
      {/* {console.log(selectValue)} */}
      <Text style={styles.text}> значение {selectValue}</Text>
      {console.log(selectValue)}
    </View>
  );
};

const Matrix = ({ selectValue }) => {
  const arr = [
    { name: "прицел 1", 50: 0, 100: 100, 150: -3, 200: -10 },
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
  ];
  //   console.log(arr, name);
  findMatchInObject(arr, selectValue);
  function findMatchInObject() {
    //  console.log(arr, name);
    for (let obj of arr) {
      if (obj.hasOwnProperty(selectValue)) {
        return console.log("hi", selectValue);
      }
    }
    return "Значение не найдено!";
  }
  //   //   return <Text style={styles.text}> значение {selectedValue}</Text>;
};

export { PickerSelect2, Matrix };
