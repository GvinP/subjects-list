import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  ListRenderItem,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { Header } from "../components/Header";
import { Subject } from "../components/Subject";
import { MARGIN, WIDTH } from "../constants/constants";
import { useAppSelector } from "../store/store";
import { ISubject, selectSubjects } from "../store/subjectsReducer";
import { CreateTaskModal } from "../components/CreateTaskModal";
import { FilterModal } from "../components/FilterModal";

export type FilterType = "all" | "active" | "completed";

export const Main = () => {
  const subjects = useAppSelector(selectSubjects);
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [filter, setFilter] = useState<FilterType>("all");

  const render: ListRenderItem<ISubject> = ({ item }) => (
    <Subject subject={item} />
  );
  const renderSeparator = () => <View style={styles.separator} />;
  const renderHeader = () => (
    <Header setFilterModalVisible={setFilterModalVisible} />
  );
  const renderFooter = () => (
    <TouchableOpacity
      style={styles.addButton}
      onPress={() => setCreateModalVisible(true)}
    >
      <Text style={styles.buttonText}>Добавить</Text>
    </TouchableOpacity>
  );

  let filtredSubjects = subjects;
  if (filter === "active") {
    filtredSubjects = subjects.filter((subject) => !subject.isDone);
  }
  if (filter === "completed") {
    filtredSubjects = subjects.filter((subject) => subject.isDone);
  }
  return (
    <SafeAreaView>
      <FlatList
        data={filtredSubjects}
        renderItem={render}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader}
        stickyHeaderIndices={[0]}
        ItemSeparatorComponent={renderSeparator}
        ListFooterComponent={renderFooter}
      />
      <CreateTaskModal
        createModalVisible={createModalVisible}
        setCreateModalVisible={setCreateModalVisible}
      />
      <FilterModal
        filterModalVisible={filterModalVisible}
        setFilterModalVisible={setFilterModalVisible}
        filter={filter}
        setFilter={setFilter}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  separator: {
    width: WIDTH - MARGIN * 2,
    height: 2,
    backgroundColor: "#EEF8FD",
    marginHorizontal: MARGIN,
  },
  addButton: {
    width: WIDTH - MARGIN * 2,
    height: 55,
    marginHorizontal: MARGIN,
    marginVertical: MARGIN * 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3785CC",
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
  },
});
