import { FormStep, SinisterForm, SinisterState } from '@/modules/sinister/core/entity/sinister.domain-model';
import { fetchCompanies } from '@/modules/sinister/core/use-cases/fetch-companies.use-case';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const initialState: SinisterState = {
  sinisterForm: {
    insuranceContract: {
      contractNumber: '',
      company: {
        id: '',
        name: ''
      },
      subscriber: ''
    },
    submitter: {
      type: 'Personne',
      name: '',
      firstName: '',
      address: '',
      addressLine2: '',
      addressLine3: '',
      addressLine4: '',
      zipCode: '',
      phoneNumber: '',
      email: '',
      country: '',
      city: ''
    },
    insuranceBroker: '',
    building: '',
    sinister: '',
    attachments: '',
    validation: ''
  },
  companies: {
    data: [],
    status: 'idle',
    error: ''
  },
  step: FormStep.INSURANCE_CONTRACT
};

export const sinisterSlice = createSlice({
  name: 'sinister',
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<FormStep>) => {
      state.step = action.payload;
    },
    setInsuranceContractForm: (state, action: PayloadAction<SinisterForm>) => {
      state.sinisterForm = action.payload;
    },
    handleCompaniesError: (state, action: PayloadAction<string>) => {
      state.companies.status = 'error';
      state.companies.error = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCompanies.pending, (state) => {
        state.companies.status = 'loading';
      })
      .addCase(fetchCompanies.rejected, (state, action) => {
        state.companies.status = 'error';
        state.companies.error = action.payload as string;
      })
      .addCase(fetchCompanies.fulfilled, (state, action) => {
        state.companies.data = action.payload;
        state.companies.status = 'success';
      });
  }
});

export const sinisterReducer = sinisterSlice.reducer;
export const sinisterActions = sinisterSlice.actions;
