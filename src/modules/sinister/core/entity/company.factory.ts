import { Company } from '@/modules/sinister/core/entity/sinister.domain-model';

export class CompanyFactory {
  static create(data?: Partial<Company>): Company {
    return {
      id: '1',
      name: 'Axa',
      ...data
    };
  }
}
