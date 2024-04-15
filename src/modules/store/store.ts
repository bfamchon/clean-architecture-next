import { registerFetcherListeners } from '@/modules/sinister/core/store/fetcher.listener';
import { registerSinisterFormStepListener } from '@/modules/sinister/core/store/sinister-form-step.listener';
import type { Dependencies } from '@/modules/store/dependencies';
import { rootReducer } from '@/modules/store/root-reducer';
import { RootState } from '@/modules/store/types';
import { Action, configureStore, createListenerMiddleware, isAction, Middleware } from '@reduxjs/toolkit';

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
