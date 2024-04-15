import {
  FormField,
  FormLabel,
  FormLabelText,
  FormLabelTextRequired,
  FormRoot
} from '@/modules/components/form/Form';
import { Button } from '@/modules/components/ui/button';
import { Input } from '@/modules/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/modules/components/ui/select';
import { useInsuranceContract } from '@/modules/sinister/react/sections/insurance-contract/use-insurance-contract.hook';
import * as Form from '@radix-ui/react-form';
import { type ChangeEvent } from 'react';

export const InsuranceContractSection = () => {
  const presenter = useInsuranceContract();

  return (
    <FormRoot>
      <FormField name="insurance-company">
        <FormLabel
          tooltipText={
            <>
              Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
            </>
          }
          label={<FormLabelTextRequired text="Compagnie d'assurance" />}
          htmlFor={'insurance-company'}
        />
        <Form.Control asChild>
          <Select
            required
            value={presenter.form.insuranceContract.company.id}
            onValueChange={presenter.updateCompany}
          >
            <SelectTrigger className="w-full" id="insurance-company" aria-label="Companies">
              <SelectValue
                placeholder="Sélectionner une compagnie"
                aria-label={presenter.form.insuranceContract.company.name}
              >
                {presenter.form.insuranceContract.company.name}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Assurances</SelectLabel>
                {presenter.companies.map((company) => (
                  <SelectItem key={company.id} value={company.id}>
                    {company.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Form.Control>
      </FormField>
      <FormField name="contract-number">
        <FormLabel
          tooltipText={
            <>
              Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
            </>
          }
          label={<FormLabelTextRequired text="Numéro de contrat" />}
        />
        <Form.Control asChild>
          <Input
            type="text"
            required
            value={presenter.form.insuranceContract.contractNumber}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              presenter.updateField('contractNumber', e.target.value)
            }
          />
        </Form.Control>
        <Form.Message className="space-y-2 text-destructive" match="valueMissing">
          Veuillez entrer un numéro de contrat
        </Form.Message>
      </FormField>
      <FormField name="subscriber">
        <FormLabel label={<FormLabelText text="Souscripteur" />} />
        <Form.Control asChild>
          <Input
            type="text"
            value={presenter.form.insuranceContract.subscriber}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              presenter.updateField('subscriber', e.target.value)
            }
          />
        </Form.Control>
      </FormField>
      <Button type="submit" className="w-full" onClick={presenter.onNext} disabled={!presenter.isSubmittable}>
        Suivant
      </Button>
    </FormRoot>
  );
};
