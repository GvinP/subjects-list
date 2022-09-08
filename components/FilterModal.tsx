import { Dispatch, SetStateAction } from "react";
import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import { HEIGHT, MARGIN, WIDTH } from "../constants/constants";
import { FilterType } from "../screens/Main";

type FilterTaskModalProps = {
  filterModalVisible: boolean;
  setFilterModalVisible: Dispatch<SetStateAction<boolean>>;
  filter: FilterType;
  setFilter: Dispatch<SetStateAction<FilterType>>;
};

export const FilterModal = ({
  filterModalVisible,
  setFilterModalVisible,
  filter,
  setFilter,
}: FilterTaskModalProps) => {
  const handleFilter = (filterValue: FilterType) => {
    setFilter(filterValue);
    setFilterModalVisible(false);
  };

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={filterModalVisible}
      onRequestClose={() => {
        setFilterModalVisible(false);
      }}
    >
      <View style={styles.container}>
        <View style={styles.modal}>
          <Pressable
            onPress={() => handleFilter("all")}
            style={[styles.button]}
          >
            <Text
              style={[
                filter === "all" ? styles.ActiveButtonText : styles.buttonText,
              ]}
            >
              Показывать все задания
            </Text>
          </Pressable>
          <Pressable
            onPress={() => handleFilter("completed")}
            style={[styles.button, styles.buttonBorder]}
          >
            <Text
              style={[
                filter === "completed"
                  ? styles.ActiveButtonText
                  : styles.buttonText,
              ]}
            >
              Выполненые
            </Text>
          </Pressable>
          <Pressable
            onPress={() => handleFilter("active")}
            style={[styles.button, styles.buttonBorder]}
          >
            <Text
              style={[
                filter === "active"
                  ? styles.ActiveButtonText
                  : styles.buttonText,
              ]}
            >
              Не выполненые
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  modal: {
    width: WIDTH - MARGIN,
    height: WIDTH * 0.45,
    marginTop: HEIGHT / 4,
    backgroundColor: "#F9F9F9",
    borderRadius: 14,
    alignItems: "center",
  },
  button: {
    width: WIDTH - MARGIN,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonBorder: {
    borderTopColor: "#ffffff",
    borderTopWidth: 0.67,
  },
  buttonText: {
    color: "#737A82",
    fontSize: 16,
    fontWeight: "500",
  },
  ActiveButtonText: {
    color: "#3785CC",
    fontSize: 16,
    fontWeight: "500",
  },
});
