import { FormStep, SinisterForm, Submitter } from '@/modules/sinister/core/entity/sinister.domain-model';
import { SubmitterForm } from '@/modules/sinister/core/form/submitter.form';
import { selectForm } from '@/modules/sinister/core/selectors/form.selector';
import { sinisterSlice } from '@/modules/sinister/core/store/sinister.slice';
import { useAppDispatch } from '@/modules/store/use-app-dispatch';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

export const useSubmitter = () => {
  function onPrevious() {
    dispatch(sinisterSlice.actions.setStep(FormStep.INSURANCE_CONTRACT));
  }
  function onNext() {}

  function updateField<T extends keyof Submitter>(key: T, value: Submitter[T]) {
    console.log('updateField', key, value);
    setForm(submitterForm.current.updateField(form, key, value));
  }
  const dispatch = useAppDispatch();
  const submitterForm = useRef(new SubmitterForm());
  const initialForm = useSelector(selectForm);
  const [form, setForm] = useState<SinisterForm>(initialForm);

  return {
    onPrevious,
    onNext,
    submitterTypes: ['Personne', 'Entreprise'],
    form,
    updateField,
    isSubmittable: false
  };
};
