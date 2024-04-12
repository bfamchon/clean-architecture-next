import { FakeCompaniesGateway } from '@/modules/sinister/core/infrastructure/fake-companies.gateway';
import { Dependencies } from '@/modules/store/dependencies';
import { AppStore, createStore } from '@/modules/store/store';

export class App {
  public dependencies: Dependencies;
  public store: AppStore;

  constructor() {
    this.dependencies = this.setupDependencies();
    this.store = createStore({ dependencies: this.dependencies });
  }

  setupDependencies(): Dependencies {
    return {
      companiesGateway: new FakeCompaniesGateway()
    };
  }
}

export const app = new App();
