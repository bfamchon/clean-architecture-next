import { SinisterForm } from '@/modules/sinister/core/entity/sinister.domain-model';
import { InsuranceContractForm } from '@/modules/sinister/core/form/insuranceContract.form';

const defaultState: SinisterForm = {
  insuranceContract: {
    contractNumber: '1234567890',
    company: {
      id: '1',
      name: 'AXA'
    }
  },
  submitter: {
    type: 'Personne',
    name: '',
    firstName: '',
    address: '',
    addressLine2: '',
    addressLine3: '',
    addressLine4: '',
    zipCode: '',
    phoneNumber: '',
    email: '',
    country: '',
    city: ''
  },
  insuranceBroker: '',
  building: '',
  sinister: '',
  attachments: '',
  validation: ''
};

describe('InsuranceContractForm', () => {
  it.each([
    {
      key: 'contractNumber' as keyof SinisterForm['insuranceContract'],
      value: '1234567890'
    },
    {
      key: 'company' as keyof SinisterForm['insuranceContract'],
      value: { id: '1', name: 'AXA' }
    },
    {
      key: 'subscriber' as keyof SinisterForm['insuranceContract'],
      value: ''
    }
  ])('should update field', ({ key, value }) => {
    const form = new InsuranceContractForm();
    const state = {
      ...defaultState,
      insuranceContract: {
        contractNumber: '1234567890',
        company: {
          id: '1',
          name: 'AXA'
        }
      }
    };
    const updatedState = form.updateField(state, key, value);
    expect(updatedState.insuranceContract[key]).toBe(value);
  });

  it('should check if form is submittable', () => {
    const form = new InsuranceContractForm();
    const state = {
      ...defaultState,

      insuranceContract: {
        contractNumber: '1234567890',
        company: {
          id: '1',
          name: 'AXA'
        }
      }
    };
    expect(form.isSubmittable(state)).toBe(true);
  });

  it('should check if form is not submittable', () => {
    const form = new InsuranceContractForm();
    const state = {
      ...defaultState,

      insuranceContract: {
        contractNumber: '123456789',
        company: {
          id: '',
          name: ''
        }
      }
    };
    expect(form.isSubmittable(state)).toBe(false);
  });
});
