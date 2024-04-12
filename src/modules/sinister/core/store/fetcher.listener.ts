import { sinisterSlice } from '@/modules/sinister/core/store/sinister.slice';
import { ListenerMiddlewareInstance } from '@reduxjs/toolkit';

export const registerFetcherListeners = (listener: ListenerMiddlewareInstance) => {
  listener.startListening({
    actionCreator: sinisterSlice.actions.setStep,
    effect: (action) => {
      console.log('step changed', action.payload);
    }
  });
};
