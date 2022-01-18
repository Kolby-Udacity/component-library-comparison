import { FC, FormEvent, useState } from 'react'

import { DateTimePicker, LocalizationProvider } from '@mui/lab'
import DateAdapter from '@mui/lab/AdapterDateFns'
import { Button, FormControlUnstyled, InputLabel, NativeSelect, Stack, Switch, TextField } from '@mui/material'

export const ContactForm: FC = () => {
  const [value, setValue] = useState<null | string>(null)

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault()
    alert('yo')
  }

  return (
    <Stack direction='row' component='form' spacing={4} onSubmit={handleFormSubmit}>
      <Stack spacing={2} width='50%'>
        <FormControlUnstyled>
          <InputLabel htmlFor='name'>Name</InputLabel>
          <TextField id='name' fullWidth={true} />
        </FormControlUnstyled>
        <FormControlUnstyled>
          <InputLabel htmlFor='email'>Email address</InputLabel>
          <TextField id='email' fullWidth={true} type='email' />
        </FormControlUnstyled>
      </Stack>
      <Stack spacing={2} width='50%'>
        <FormControlUnstyled>
          <InputLabel id='demo-simple-select-label'>Topic</InputLabel>
          <NativeSelect variant='filled' fullWidth={true}>
            <option value={undefined}></option>
            <option value='business'>Business</option>
            <option value='career'>Career</option>
            <option value='security'>Security</option>
          </NativeSelect>
        </FormControlUnstyled>
        <LocalizationProvider dateAdapter={DateAdapter}>
          <DateTimePicker
            showTodayButton
            disablePast
            todayText='now'
            value={value}
            onChange={(newValue: any) => {
              setValue(newValue)
            }}
            leftArrowButtonText='Open previous month'
            rightArrowButtonText='Open next month'
            renderInput={(params) => (
              <FormControlUnstyled>
                <InputLabel id='demo-simple-select-label'>Date &amp; Time</InputLabel>
                <TextField {...params} fullWidth={true} />
              </FormControlUnstyled>
            )}
          />
        </LocalizationProvider>

        <FormControlUnstyled style={{ display: 'flex', alignItems: 'center' }}>
          <Switch id='us' defaultChecked />
          <InputLabel htmlFor='us'>Are you located in the United States?</InputLabel>
        </FormControlUnstyled>

        <Button type='submit'>Submit</Button>
      </Stack>
    </Stack>
  )
}
