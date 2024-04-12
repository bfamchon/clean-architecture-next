import { CompanyFactory } from '@/modules/sinister/core/entity/company.factory';
import { CompaniesGatewayInterface } from '@/modules/sinister/core/infrastructure/interfaces/companies.gateway';

export class FakeCompaniesGateway implements CompaniesGatewayInterface {
  getCompanies() {
    const companies = [
      CompanyFactory.create({
        id: '1',
        name: 'AXA'
      }),
      CompanyFactory.create({
        id: '2',
        name: 'GMF'
      })
    ];
    return Promise.resolve(companies);
  }
}
