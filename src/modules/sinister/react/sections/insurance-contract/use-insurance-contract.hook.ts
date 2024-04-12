import { InsuranceContract, SinisterForm } from '@/modules/sinister/core/entity/sinister.domain-model';
import { InsuranceContractForm } from '@/modules/sinister/core/form/insuranceContract.form';
import { companiesFetchingStatusSelector } from '@/modules/sinister/core/selectors/companies.selector';
import { selectForm } from '@/modules/sinister/core/selectors/form.selector';
import { fetchCompanies } from '@/modules/sinister/core/use-cases/fetch-companies.use-case';
import { setInsuranceContractForm } from '@/modules/sinister/core/use-cases/set-insurance-contract-form.use-case';
import { RootState, useAppDispatch } from '@/modules/store/store';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

export const useInsuranceContract = () => {
  function onNext(event: React.FormEvent) {
    event.preventDefault();
    dispatch(setInsuranceContractForm(form));
  }

  function isSubmittable() {
    return insuranceContractForm.current.isSubmittable(form);
  }

  function updateField<T extends keyof InsuranceContract>(key: T, value: InsuranceContract[T]) {
    setForm(insuranceContractForm.current.updateField(form, key, value));
  }

  const insuranceContractForm = useRef(new InsuranceContractForm());

  const dispatch = useAppDispatch();

  const companies = useSelector((state: RootState) => state.sinister.companies.data);
  const initialForm = useSelector(selectForm);
  const companiesFetchingStatus = useSelector(companiesFetchingStatusSelector);

  const [form, setForm] = useState<SinisterForm>(initialForm);

  useEffect(() => {
    console.log('init');
    if (companiesFetchingStatus === 'idle') {
      dispatch(fetchCompanies());
    }
  }, [companiesFetchingStatus, dispatch]);

  return {
    companies,
    updateCompany: (value: string) => {
      const company = companies.find((c) => c.id === value);
      if (!company) {
        return;
      }
      updateField('company', { ...company });
    },
    form,
    onNext,
    isSubmittable: isSubmittable(),
    updateField
  };
};
