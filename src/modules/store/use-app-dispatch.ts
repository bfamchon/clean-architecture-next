import { Dependencies } from '@/modules/store/dependencies';
import { RootState } from '@/modules/store/types';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

export type AppDispatch = ThunkDispatch<RootState, Dependencies, Action>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
