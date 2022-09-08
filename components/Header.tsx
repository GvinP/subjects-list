import { Dispatch, SetStateAction } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MARGIN, WIDTH } from "../constants/constants";

type HeaderProps = {
  setFilterModalVisible: Dispatch<SetStateAction<boolean>>;
};

export const Header = ({setFilterModalVisible}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={()=>setFilterModalVisible(true)}>
        <Text style={styles.text}>Показывать все задания</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  button: {
    width: WIDTH-MARGIN*2,
    height: 36,
    marginVertical: MARGIN*2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#3785CC',
    borderRadius: 8,
    borderWidth: 2,
  },
  text: {
    color: '#3785CC',
    fontSize: 14,
    fontWeight: '500'
  },
});
