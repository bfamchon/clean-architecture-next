export enum FormStep {
  INSURANCE_CONTRACT = 1,
  SUBMITTER = 2,
  INSURANCE_BROKER = 3,
  BUILDING = 4,
  SINISTER = 5,
  ATTACHMENTS = 6,
  VALIDATION = 7
}

export type Company = {
  id: string;
  name: string;
};

export type InsuranceContract = {
  contractNumber: string;
  company: Company;
  subscriber?: string;
};

export type SubmitterType = 'Personne' | 'Entreprise';
export type Submitter = {
  type: SubmitterType;
  name: string;
  firstName: string;
  address: string;
  addressLine2: string;
  addressLine3: string;
  addressLine4: string;
  zipCode?: string;
  phoneNumber: string;
  email: string;
  country: string;
  city: string;
};

export type SinisterForm = {
  insuranceContract: InsuranceContract;
  submitter: Submitter;
  insuranceBroker: string;
  building: string;
  sinister: string;
  attachments: string;
  validation: string;
};

export type SinisterState = {
  sinisterForm: SinisterForm;
  companies: {
    data: Company[];
    status: 'idle' | 'loading' | 'success' | 'error';
    error: string;
  };
  step: FormStep;
};
