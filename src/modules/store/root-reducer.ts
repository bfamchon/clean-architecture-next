import { sinisterReducer } from '@/modules/sinister/core/store/sinister.slice';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  sinister: sinisterReducer
});
