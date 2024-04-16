import { useInsuranceContract } from '@/modules/sinister/react/sections/insurance-contract/use-insurance-contract.hook';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { ChangeEvent } from 'react';

export const InsuranceContractSection = () => {
  const presenter = useInsuranceContract();

  return (
    <>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          maxWidth: 500,
          margin: 'auto'
        }}
        noValidate
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Compagnie d&nbsp;assurance</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="insurance-company"
            value={presenter.form.insuranceContract.company.id}
            label="Compagnie d'assurance"
            onChange={(event) => presenter.updateCompany(event.target.value)}
          >
            {presenter.companies.map((company) => (
              <MenuItem key={company.id} value={company.id}>
                {company.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <TextField
            id="contract-number"
            label="Numéro de contrat"
            value={presenter.form.insuranceContract.contractNumber}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              presenter.updateField('contractNumber', e.target.value)
            }
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            id="subscriber"
            label="Souscripteur"
            value={presenter.form.insuranceContract.subscriber}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              presenter.updateField('subscriber', e.target.value)
            }
          />
        </FormControl>
        <Button
          type="submit"
          onClick={presenter.onNext}
          disabled={!presenter.isSubmittable}
          variant="contained"
        >
          Suivant
        </Button>
      </Box>
    </>
  );
};
