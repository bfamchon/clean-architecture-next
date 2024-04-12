import { Dependencies } from '@/modules/store/dependencies';
import { AppDispatch, RootState } from '@/modules/store/store';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
  extra: Dependencies;
}>();
