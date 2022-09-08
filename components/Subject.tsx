import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FC } from "react";
import { deleteTask, ISubject, updateTask } from "../store/subjectsReducer";
import CheckBoxChecked from "./CheckBoxChecked";
import CheckBoxUnchecked from "./CheckBoxUnchecked";
import Trash from "./Trash";
import { MARGIN, WIDTH } from "../constants/constants";
import { useAppDispatch } from "../store/store";

type SubjectType = {
  subject: ISubject;
};

export const Subject: FC<SubjectType> = ({ subject }) => {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      {subject.isDone ? (
        <TouchableOpacity
          onPress={() =>
            dispatch(updateTask({ id: subject.id, isDone: false }))
          }
        >
          <CheckBoxChecked />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => dispatch(updateTask({ id: subject.id, isDone: true }))}
        >
          <CheckBoxUnchecked />
        </TouchableOpacity>
      )}
      <View style={styles.subjectText}>
        <Text style={styles.subjectTitle}>{subject.subject}</Text>
        <Text style={[styles.subjectTask, subject.isDone && styles.isDone]}>
          {subject.task}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.trashContainer}
        onPress={() => dispatch(deleteTask({ id: subject.id }))}
      >
        <Trash />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WIDTH - MARGIN * 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: MARGIN,
  },
  subjectText: {
    width: WIDTH * 0.6,
  },
  subjectTitle: {
    fontSize: 17,
    fontWeight: "500",
    marginBottom: 2,
    height: 26,
    color: "#3B3B3B",
  },
  subjectTask: {
    fontSize: 13,
    fontWeight: "400",
    color: "#3B3B3B",
  },
  isDone: {
    textDecorationLine: "line-through",
    color: "#6F767E",
  },
  trashContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
