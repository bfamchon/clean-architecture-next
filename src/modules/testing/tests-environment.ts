import { StubCompaniesGateway } from '@/modules/sinister/core/infrastructure/testing/stub-companies.gateway';
import { Dependencies } from '@/modules/store/dependencies';
import { createStore } from '@/modules/store/store';
import { RootState } from '@/modules/store/types';

/**
 * Create testing dependencies with provided defaults
 * @param dependencies
 * @returns
 */
const createDependencies = (dependencies?: Partial<Dependencies>): Dependencies => ({
  companiesGateway: new StubCompaniesGateway(),
  ...dependencies
});

/**
 * Creates store initialized with a partial state
 * @param config
 * @returns
 */
export const createTestStore = (config?: {
  initialState?: Partial<RootState>;
  dependencies?: Partial<Dependencies>;
}) => {
  const initialStore = createStore({
    dependencies: createDependencies(config?.dependencies)
  });

  const preloadedState: RootState = {
    ...initialStore.getState(),
    ...config?.initialState
  };

  const store = createStore({
    preloadedState,
    dependencies: createDependencies(config?.dependencies)
  });

  return store;
};

/**
 * Useful for testing selectors without setting redux up
 * @param partialState
 * @returns
 */
export const createTestState = (partialState?: Partial<RootState>) => {
  const store = createStore({
    dependencies: createDependencies()
  });

  const storeInitialState = store.getState();

  const merged = {
    ...storeInitialState,
    ...partialState
  };

  return createTestStore({ initialState: merged }).getState();
};
