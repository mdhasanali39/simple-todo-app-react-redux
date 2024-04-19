import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("todos")) || [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state));
    },
    deleteTodo: (state, action) => {
      const index = state.findIndex((t) => t.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem("todos", JSON.stringify(state));
    },
    updateTaskStatus: (state, action) => {
      state.forEach((t) => {
        if (t.id === action.payload) {
          t.status = "completed";
        }
      });

      localStorage.setItem("todos", JSON.stringify(state));
    },
  },
});

export default todosSlice.reducer;
export const { addTodo, deleteTodo, updateTaskStatus } = todosSlice.actions;
