// src/store/slices/todoSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../firebase/config';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

// Thunk para agregar un nuevo TO-DO
export const addTodo = createAsyncThunk('todos/addTodo', async (text, thunkAPI) => {
  try {
    const docRef = await addDoc(collection(db, 'todos'), {
      text,
      completed: false,
      createdAt: new Date(),
    });
    return { id: docRef.id, text, completed: false };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Thunk para cambiar el estado de completado de un TO-DO
export const toggleTodo = createAsyncThunk('todos/toggleTodo', async (id, thunkAPI) => {
  try {
    const todoRef = doc(db, 'todos', id);
    const currentCompletedStatus = thunkAPI.getState().todos.todos.find(todo => todo.id === id).completed;
    await updateDoc(todoRef, {
      completed: !currentCompletedStatus,
    });
    return { id, completed: !currentCompletedStatus };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(addTodo.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(toggleTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(toggleTodo.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(toggleTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setTodos } = todoSlice.actions;

export default todoSlice.reducer;
