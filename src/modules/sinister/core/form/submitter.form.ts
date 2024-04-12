import { SinisterForm, Submitter } from '@/modules/sinister/core/entity/sinister.domain-model';
import { produce } from 'immer';

export class SubmitterForm {
  constructor() {}

  updateField<T extends keyof Submitter>(state: SinisterForm, key: T, value: Submitter[T]) {
    return produce(state, (draft) => {
      console.log(draft);
      draft.submitter[key] = value;
    });
  }
}
