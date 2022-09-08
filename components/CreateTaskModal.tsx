import { Dispatch, SetStateAction, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import { HEIGHT, MARGIN, WIDTH } from "../constants/constants";
import { useAppDispatch } from "../store/store";
import { createTask } from "../store/subjectsReducer";

type CreateTaskModalProps = {
  createModalVisible: boolean;
  setCreateModalVisible: Dispatch<SetStateAction<boolean>>;
};

export const CreateTaskModal = ({
  createModalVisible,
  setCreateModalVisible,
}: CreateTaskModalProps) => {
  const dispatch = useAppDispatch();
  const [subject, setSubject] = useState("");
  const [task, setTask] = useState("");

  const handleCreateTask = () => {
    if (subject.trim() && task.trim()) {
      dispatch(createTask({ subject, task }));
      setSubject("");
      setTask("");
      setCreateModalVisible(false);
    }
  };

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={createModalVisible}
      onRequestClose={() => {
        setCreateModalVisible(false);
      }}
    >
      <View style={styles.container}>
        <View style={styles.modal}>
          <Text style={styles.title}>Добавить предмет</Text>
          <Text style={styles.text}>Укажите заголовок и задание</Text>
          <TextInput
            placeholder="Заголовок"
            style={styles.input}
            autoFocus
            value={subject}
            onChangeText={setSubject}
          />
          <TextInput
            placeholder="Задание"
            style={styles.input}
            value={task}
            onChangeText={setTask}
          />
          <View style={styles.buttonContainer}>
            <Pressable
              onPress={() => setCreateModalVisible(false)}
              style={[styles.button, styles.cancelButton]}
            >
              <Text style={styles.cancelButtonText}>Отменить</Text>
            </Pressable>
            <Pressable
              onPress={handleCreateTask}
              style={[styles.button, styles.saveButton]}
            >
              <Text style={styles.saveButtonText}>Сохранить</Text>
            </Pressable>
          </View>
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
    width: WIDTH * 0.7,
    height: WIDTH * 0.58,
    marginTop: HEIGHT / 4,
    backgroundColor: "#F9F9F9",
    borderRadius: 14,
    alignItems: "center",
  },
  title: {
    fontSize: 17,
    fontWeight: "500",
    color: "#3B3B3B",
    marginTop: MARGIN,
    marginBottom: MARGIN / 4,
  },
  text: {
    fontSize: 13,
    fontWeight: "400",
    color: "#737A82",
    marginBottom: MARGIN,
  },
  input: {
    width: WIDTH * 0.63,
    height: 32,
    borderWidth: 0.5,
    borderColor: "rgba(60, 60, 67, 0.3)",
    borderRadius: 7,
    marginBottom: MARGIN,
    padding: 7,
    fontSize: 13,
    fontWeight: "400",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderTopColor: "#ffffff",
    borderTopWidth: 0.67,
  },
  cancelButton: {
    borderRightColor: "#ffffff",
    borderRightWidth: 0.67,
  },
  cancelButtonText: {
    color: "#C3C3C5",
    fontSize: 17,
    fontWeight: "500",
  },
  saveButton: {},
  saveButtonText: {
    color: "#3784CC",
    fontSize: 17,
    fontWeight: "500",
  },
});
