import { RootState } from '@/modules/store/store';

export const companiesSelector = (state: RootState) => state.sinister.companies;
export const companiesFetchingStatusSelector = (state: RootState) => state.sinister.companies.status;
