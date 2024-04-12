import { extractErrorMessage } from '@/modules/shared/errors.utils';
import { createAppAsyncThunk } from '@/modules/store/create-app-thunk';

export const fetchCompanies = createAppAsyncThunk(
  'sinister/fetchCompanies',
  async (_, { extra: { companiesGateway }, rejectWithValue }) => {
    try {
      return companiesGateway.getCompanies();
    } catch (e) {
      return rejectWithValue(extractErrorMessage(e));
    }
  }
);
