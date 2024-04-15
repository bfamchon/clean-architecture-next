import { RootState } from '@/modules/store/types';

export const selectStep = (state: RootState) => state.sinister.step;
