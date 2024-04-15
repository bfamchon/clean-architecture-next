import type { Dependencies } from '@/modules/store/dependencies';
import { RootState } from '@/modules/store/types';
import type { AppDispatch } from '@/modules/store/use-app-dispatch';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
  extra: Dependencies;
}>();
