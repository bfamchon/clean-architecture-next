import { Company } from '@/modules/sinister/core/entity/sinister.domain-model';
import { CompaniesGatewayInterface } from '@/modules/sinister/core/infrastructure/interfaces/companies.gateway';

export class StubCompaniesGateway implements CompaniesGatewayInterface {
  constructor(private data: Company[] = []) {}

  getCompanies() {
    return Promise.resolve(this.data);
  }
}
