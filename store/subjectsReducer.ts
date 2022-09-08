import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import "react-native-get-random-values";
import { v4 } from "uuid";
import { RootState } from "./store";

interface SubjectsState {
  subjects: ISubject[];
}

const initialState: SubjectsState = {
  subjects: [
    {
      id: "1",
      subject: "Математика",
      task: "Стр. 4б упр. 36 а, б.",
      isDone: false,
    },
    {
      id: "2",
      subject: "Русский язык",
      task: "Учебник, стр. 4б упр. 36 а, б.",
      isDone: true,
    },
    {
      id: "3",
      subject: "ИЗО",
      task: "Подготовить клей, ножницы, вл. салфетки, цветную бумагу, шерстяные нитки",
      isDone: false,
    },
    {
      id: "4",
      subject: "Литература",
      task: "Учебник, стр. 4б упр. 36 а, б.",
      isDone: true,
    },
  ],
};

export const subjectsSlice = createSlice({
  name: "subjects",
  initialState,
  reducers: {
    createTask: (
      state,
      action: PayloadAction<{ subject: string; task: string }>
    ) => {
      state.subjects.push({ ...action.payload, isDone: false, id: v4() });
    },
    updateTask: (
      state,
      action: PayloadAction<{ id: string; isDone: boolean }>
    ) => {
      state.subjects = state.subjects.map((subject) =>
        subject.id === action.payload.id
          ? { ...subject, isDone: action.payload.isDone }
          : subject
      );
    },
    deleteTask: (state, action: PayloadAction<{ id: string }>) => {
      state.subjects = state.subjects.filter(
        (subject) => subject.id !== action.payload.id
      );
    },
  },
});

export const { createTask, updateTask, deleteTask } = subjectsSlice.actions;

export const selectSubjects = (state: RootState) => state.subjects.subjects;

export default subjectsSlice.reducer;

export interface ISubject {
  id: string;
  subject: string;
  task: string;
  isDone: boolean;
}
