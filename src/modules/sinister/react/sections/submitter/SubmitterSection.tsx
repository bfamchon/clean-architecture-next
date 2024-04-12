import { FormField, FormLabel, FormLabelText, FormLabelTextRequired, FormRoot } from '@/components/form/Form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { SubmitterType } from '@/modules/sinister/core/entity/sinister.domain-model';
import { useSubmitter } from '@/modules/sinister/react/sections/submitter/use-submitter.hook';
import { FormControl, FormMessage } from '@radix-ui/react-form';
import { ChangeEvent } from 'react';

export const SubmitterSection = () => {
  const presenter = useSubmitter();
  return (
    <FormRoot>
      <FormField name="submitter-type">
        <FormLabel
          tooltipText={
            <>
              Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
            </>
          }
          label={<FormLabelTextRequired text="Type de déclarant" />}
          htmlFor={'submitter-type'}
        />
        <FormControl asChild>
          <Select
            required
            value={presenter.form.submitter.type}
            onValueChange={(value: SubmitterType) => presenter.updateField('type', value)}
          >
            <SelectTrigger className="w-full" id="insurance-company" aria-label="Companies">
              <SelectValue
                placeholder="Sélectionner une compagnie"
                aria-label={presenter.form.submitter.type}
              >
                {presenter.form.submitter.type}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Types</SelectLabel>
                {presenter.submitterTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </FormControl>
      </FormField>
      <FormField name="name">
        <FormLabel
          tooltipText={
            <>
              hello <br /> world
            </>
          }
          label={<FormLabelTextRequired text="Nom" />}
        />
        <FormControl asChild>
          <Input
            type="text"
            autoComplete="family-name"
            required
            value={presenter.form.submitter.name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => presenter.updateField('name', e.target.value)}
          />
        </FormControl>
        <FormMessage className="space-y-2 text-destructive" match="valueMissing">
          Veuillez entrer votre nom de famille.
        </FormMessage>
      </FormField>
      <FormField name="first-name">
        <FormLabel
          tooltipText={
            <>
              hello <br /> world
            </>
          }
          label={<FormLabelTextRequired text="Prénom" />}
        />
        <FormControl asChild>
          <Input
            type="text"
            autoComplete="given-name"
            required
            value={presenter.form.submitter.firstName}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              presenter.updateField('firstName', e.target.value)
            }
          />
        </FormControl>
        <FormMessage className="space-y-2 text-destructive" match="valueMissing">
          Veuillez entrer votre prénom.
        </FormMessage>
      </FormField>
      <FormField name="address">
        <FormLabel
          tooltipText={
            <>
              hello <br /> world
            </>
          }
          label={<FormLabelTextRequired text="Adresse" />}
        />
        <FormControl asChild>
          <Input
            type="text"
            autoComplete="street-address"
            required
            value={presenter.form.submitter.address}
            onChange={(e: ChangeEvent<HTMLInputElement>) => presenter.updateField('address', e.target.value)}
          />
        </FormControl>
        <FormMessage className="space-y-2 text-destructive" match="valueMissing">
          Veuillez entrer votre addresse.
        </FormMessage>
      </FormField>
      <FormField name="address-2">
        <FormLabel
          tooltipText={
            <>
              hello <br /> world
            </>
          }
          label={<FormLabelText text="Adresse (ligne 2)" />}
        />
        <FormControl asChild>
          <Input
            type="text"
            autoComplete="address-line2"
            value={presenter.form.submitter.addressLine2}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              presenter.updateField('addressLine2', e.target.value)
            }
          />
        </FormControl>
      </FormField>
      <FormField name="address-3">
        <FormLabel
          tooltipText={
            <>
              hello <br /> world
            </>
          }
          label={<FormLabelText text="Adresse (ligne 3)" />}
        />
        <FormControl asChild>
          <Input
            type="text"
            autoComplete="address-line3"
            value={presenter.form.submitter.addressLine3}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              presenter.updateField('addressLine3', e.target.value)
            }
          />
        </FormControl>
      </FormField>
      <FormField name="address-4">
        <FormLabel
          tooltipText={
            <>
              hello <br /> world
            </>
          }
          label={<FormLabelText text="Adresse (ligne 4)" />}
        />
        <FormControl asChild>
          <Input
            type="text"
            autoComplete="address-level4"
            value={presenter.form.submitter.addressLine4}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              presenter.updateField('addressLine4', e.target.value)
            }
          />
        </FormControl>
      </FormField>
      <div className="flex flex-wrap gap-4 min-w-32">
        <FormField name="phone" className="flex-1 min-w-32">
          <FormLabel
            tooltipText={
              <>
                hello <br /> world
              </>
            }
            label={<FormLabelTextRequired text="Téléphone" />}
          />
          <FormControl asChild>
            <Input
              type="tel"
              autoComplete="tel"
              value={presenter.form.submitter.phoneNumber}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                presenter.updateField('phoneNumber', e.target.value)
              }
            />
          </FormControl>
          <FormMessage className="space-y-2 text-destructive" match="valueMissing">
            Veuillez renseigner votre numéro de téléphone.
          </FormMessage>
        </FormField>
        <FormField name="email" className="flex-1 min-w-32">
          <FormLabel
            tooltipText={
              <>
                hello <br /> world
              </>
            }
            label={<FormLabelTextRequired text="Email" />}
          />
          <FormControl asChild>
            <Input
              type="email"
              autoComplete="email"
              value={presenter.form.submitter.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => presenter.updateField('email', e.target.value)}
            />
          </FormControl>
          <FormMessage className="space-y-2 text-destructive" match="valueMissing">
            Veuillez renseigner votre email.
          </FormMessage>
        </FormField>
      </div>

      <FormField name="country">
        <FormLabel
          tooltipText={
            <>
              Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
            </>
          }
          label={<FormLabelTextRequired text="Pays" />}
          htmlFor={'country'}
        />
        <FormControl asChild>
          <Select
            required
            value={presenter.form.submitter.country}
            onValueChange={(value: SubmitterType) => presenter.updateField('country', value)}
          >
            <SelectTrigger className="w-full" id="country" aria-label="Pays">
              <SelectValue placeholder="Sélectionner un pays" aria-label={presenter.form.submitter.country}>
                {presenter.form.submitter.country}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Pays</SelectLabel>
                {presenter.submitterTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </FormControl>
      </FormField>
      <div className="flex flex-wrap gap-4 min-w-32">
        <FormField name="zipCode" className="flex-1 min-w-32">
          <FormLabel
            tooltipText={
              <>
                hello <br /> world
              </>
            }
            label={<FormLabelText text="Code Postal" />}
          />
          <FormControl asChild>
            <Input
              type="text"
              autoComplete="postal-code"
              value={presenter.form.submitter.zipCode}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                presenter.updateField('zipCode', e.target.value)
              }
            />
          </FormControl>
        </FormField>
        <FormField name="city" className="flex-1 min-w-32">
          <FormLabel
            tooltipText={
              <>
                hello <br /> world
              </>
            }
            label={<FormLabelTextRequired text="Ville" />}
          />
          <FormControl asChild>
            <Input
              type="text"
              autoComplete="address-level2"
              value={presenter.form.submitter.city}
              onChange={(e: ChangeEvent<HTMLInputElement>) => presenter.updateField('city', e.target.value)}
            />
          </FormControl>
          <FormMessage className="space-y-2 text-destructive" match="valueMissing">
            Veuillez renseigner votre ville.
          </FormMessage>
        </FormField>
      </div>
      <Button onClick={presenter.onPrevious}>Précédent</Button>
    </FormRoot>
  );
};
