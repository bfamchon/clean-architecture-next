import { SubmitterType } from '@/modules/sinister/core/entity/sinister.domain-model';
import { useSubmitter } from '@/modules/sinister/react/sections/submitter/use-submitter.hook';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { ChangeEvent } from 'react';

export const SubmitterSection = () => {
  const presenter = useSubmitter();
  return (
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
        <InputLabel id="submitter-type-label">Type de déclarant</InputLabel>
        <Select
          labelId="submitter-type-label"
          id="submitter-type"
          value={presenter.form.submitter.type}
          label="Type de déclarant"
          onChange={(event) => presenter.updateField('type', event.target.value as SubmitterType)}
        >
          {presenter.submitterTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <TextField
          id="family-name"
          autoComplete="family-name"
          label="Nom"
          value={presenter.form.submitter.name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => presenter.updateField('name', e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          id="given-name"
          label="Prénom"
          autoComplete="given-name"
          value={presenter.form.submitter.firstName}
          onChange={(e: ChangeEvent<HTMLInputElement>) => presenter.updateField('firstName', e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          id="address"
          label="Adresse"
          autoComplete="street-address"
          value={presenter.form.submitter.address}
          onChange={(e: ChangeEvent<HTMLInputElement>) => presenter.updateField('address', e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          id="address-2"
          label="Adresse (ligne 2)"
          autoComplete="address-line2"
          value={presenter.form.submitter.addressLine2}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            presenter.updateField('addressLine2', e.target.value)
          }
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          id="address-3"
          label="Adresse (ligne 3)"
          autoComplete="address-line3"
          value={presenter.form.submitter.addressLine3}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            presenter.updateField('addressLine3', e.target.value)
          }
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          id="address-4"
          label="Adresse (ligne 4)"
          autoComplete="address-level4"
          value={presenter.form.submitter.addressLine4}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            presenter.updateField('addressLine4', e.target.value)
          }
        />
      </FormControl>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2
        }}
      >
        <TextField
          sx={{ flex: 1 }}
          id="phoneNumber"
          label="Téléphone"
          autoComplete="tel"
          type="tel"
          value={presenter.form.submitter.phoneNumber}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            presenter.updateField('phoneNumber', e.target.value)
          }
        />
        <TextField
          sx={{ flex: 1 }}
          id="email"
          label="Email"
          autoComplete="email"
          type="email"
          value={presenter.form.submitter.email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => presenter.updateField('email', e.target.value)}
        />
      </Box>
      <FormControl fullWidth>
        <InputLabel id="country-label">Pays</InputLabel>
        <Select
          labelId="country-label"
          id="country"
          value={presenter.form.submitter.country}
          label="Pays"
          onChange={(event) => presenter.updateField('country', event.target.value)}
        >
          {presenter.submitterTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2
        }}
      >
        <TextField
          sx={{ flex: 1 }}
          id="zipCode"
          label="Code Postal"
          autoComplete="postal-code"
          value={presenter.form.submitter.zipCode}
          onChange={(e: ChangeEvent<HTMLInputElement>) => presenter.updateField('zipCode', e.target.value)}
        />
        <TextField
          sx={{ flex: 1 }}
          id="city"
          label="Ville"
          autoComplete="address-level2"
          value={presenter.form.submitter.city}
          onChange={(e: ChangeEvent<HTMLInputElement>) => presenter.updateField('city', e.target.value)}
        />
      </Box>
      <Grid container direction={'row'} alignItems={'center'} spacing={2}>
        <Grid item>
          <Button onClick={presenter.onPrevious}>Précédent</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={presenter.onNext} disabled={!presenter.isSubmittable}>
            Suivant
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
