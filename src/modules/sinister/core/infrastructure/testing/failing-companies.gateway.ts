import { Company } from '@/modules/sinister/core/entity/sinister.domain-model';
import { CompaniesGatewayInterface } from '@/modules/sinister/core/infrastructure/interfaces/companies.gateway';

export class FailingCompaniesGateway implements CompaniesGatewayInterface {
  getCompanies(): Promise<Company[]> {
    throw new Error('Failed to fetch companies');
  }
}
