import { InsuranceContract, SinisterForm } from '@/modules/sinister/core/entity/sinister.domain-model';
import { produce } from 'immer';

export class InsuranceContractForm {
  updateField<T extends keyof InsuranceContract>(state: SinisterForm, key: T, value: InsuranceContract[T]) {
    return produce(state, (draft) => {
      draft.insuranceContract[key] = value;
    });
  }

  isSubmittable(state: SinisterForm) {
    if (
      state.insuranceContract.contractNumber.length < 10 ||
      state.insuranceContract.company.id === '' ||
      state.insuranceContract.company.name === ''
    ) {
      return false;
    }
    return true;
  }
}
