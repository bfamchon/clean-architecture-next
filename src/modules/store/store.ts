import { registerFetcherListeners } from '@/modules/sinister/core/store/fetcher.listener';
import { registerSinisterFormStepListener } from '@/modules/sinister/core/store/sinister-form-step.listener';
import { sinisterReducer } from '@/modules/sinister/core/store/sinister.slice';
import { Dependencies } from '@/modules/store/dependencies';
import {
  Action,
  combineReducers,
  configureStore,
  createListenerMiddleware,
  isAction,
  Middleware,
  ThunkDispatch
} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const rootReducer = combineReducers({
  sinister: sinisterReducer
});

export const createStore = ({
  dependencies,
  preloadedState
}: {
  dependencies: Dependencies;
  preloadedState?: Partial<RootState>;
}) => {
  const actions: Action[] = [];
  const logActionsMiddleware: Middleware = () => (next) => (action) => {
    if (isAction(action)) {
      actions.push(action);
    }
    return next(action);
  };

  const listener = createListenerMiddleware();
  registerFetcherListeners(listener);
  registerSinisterFormStepListener(listener);

  const store = configureStore({
    reducer: rootReducer,
    middleware(getDefaultMiddleware) {
      return getDefaultMiddleware({
        thunk: {
          extraArgument: dependencies
        }
      })
        .prepend(logActionsMiddleware)
        .prepend(listener.middleware);
    },
    preloadedState
  });

  return { ...store, getActions: () => actions };
};

type AppStoreWithGetActions = ReturnType<typeof createStore>;
export type AppStore = Omit<AppStoreWithGetActions, 'getActions'>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, Dependencies, Action>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
