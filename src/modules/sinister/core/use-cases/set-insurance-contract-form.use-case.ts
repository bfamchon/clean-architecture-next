import { SinisterForm } from '@/modules/sinister/core/entity/sinister.domain-model';
import { sinisterActions } from '@/modules/sinister/core/store/sinister.slice';
import { AppDispatch } from '@/modules/store/store';

export const setInsuranceContractForm = (form: SinisterForm) => async (dispatch: AppDispatch) => {
  dispatch(sinisterActions.setInsuranceContractForm(form));
};
