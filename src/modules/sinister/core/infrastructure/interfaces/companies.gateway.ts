import { Company } from '@/modules/sinister/core/entity/sinister.domain-model';

export interface CompaniesGatewayInterface {
  getCompanies(): Promise<Company[]>;
}
