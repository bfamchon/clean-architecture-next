import { RootState } from '@/modules/store/types';

export const companiesSelector = (state: RootState) => state.sinister.companies;
export const companiesFetchingStatusSelector = (state: RootState) => state.sinister.companies.status;
