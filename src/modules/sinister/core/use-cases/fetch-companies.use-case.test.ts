import { CompanyFactory } from '@/modules/sinister/core/entity/company.factory';
import { StubCompaniesGateway } from '@/modules/sinister/core/infrastructure/stub-companies.gateway';
import { fetchCompanies } from '@/modules/sinister/core/use-cases/fetch-companies.use-case';
import { createTestStore } from '@/modules/testing/tests-environment';

describe('FetchCompaniesUseCase', () => {
  it('should fetch companies', async () => {
    const companies = [
      CompanyFactory.create({
        id: '1',
        name: 'AXA'
      })
    ];
    const store = createTestStore({
      dependencies: {
        companiesGateway: new StubCompaniesGateway(companies)
      }
    });

    expect(store.getState().sinister.companies.status).toBe('idle');

    const promise = store.dispatch(fetchCompanies());

    expect(store.getState().sinister.companies.data).toEqual([]);
    expect(store.getState().sinister.companies.status).toBe('loading');

    await promise;

    expect(store.getState().sinister.companies.data).toEqual(companies);
    expect(store.getState().sinister.companies.status).toBe('success');
  });
});
