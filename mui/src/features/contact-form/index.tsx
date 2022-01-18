import { FC, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'
import { DateTimePicker, LocalizationProvider } from '@mui/lab'
import DateAdapter from '@mui/lab/AdapterDateFns'
import { Button, FormControlUnstyled, InputLabel, NativeSelect, Stack, Switch, TextField } from '@mui/material'

const contactFormSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email().nonempty(),
  topic: z.enum(['', 'business', 'career', 'security']),
  date: z.date(),
  owner: z.boolean(),
})

type ContactForm = z.infer<typeof contactFormSchema>

export const ContactForm: FC = () => {
  const [dateValue, setDateValue] = useState<null | string>(null)

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
  })

  const processForm = (data: any) => console.log(data)

  return (
    <Stack direction='row' component='form' spacing={4} onSubmit={handleSubmit(processForm)}>
      <Stack spacing={2} width='50%'>
        <Controller
          name='name'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <FormControlUnstyled>
              <InputLabel htmlFor='name'>Name</InputLabel>
              <TextField id='name' fullWidth={true} error={Boolean(errors.name?.message)} {...field} />
            </FormControlUnstyled>
          )}
        />
        {errors.name?.message && <p style={{ color: 'red' }}>{errors.name?.message}</p>}

        <Controller
          name='email'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <FormControlUnstyled>
              <InputLabel htmlFor='email'>Email address</InputLabel>
              <TextField id='email' fullWidth={true} type='email' error={Boolean(errors.email?.message)} {...field} />
            </FormControlUnstyled>
          )}
        />
        {errors.email?.message && <p style={{ color: 'red' }}>{errors.email?.message}</p>}
      </Stack>
      <Stack spacing={2} width='50%'>
        <Controller
          name='topic'
          defaultValue=''
          control={control}
          render={({ field }) => (
            <FormControlUnstyled>
              <InputLabel id='demo-simple-select-label'>Topic</InputLabel>
              <NativeSelect variant='filled' fullWidth={true} error={Boolean(errors.topic?.message)} {...field}>
                <option value=''></option>
                <option value='business'>Business</option>
                <option value='career'>Career</option>
                <option value='security'>Security</option>
              </NativeSelect>
            </FormControlUnstyled>
          )}
        />
        {errors.topic?.message && <p style={{ color: 'red' }}>{errors.topic?.message}</p>}

        <LocalizationProvider dateAdapter={DateAdapter}>
          <DateTimePicker
            showTodayButton
            disablePast
            value={dateValue}
            todayText='now'
            onChange={(newValue: any) => {
              setDateValue(newValue)
              setValue('date', newValue, { shouldValidate: true, shouldDirty: true })
            }}
            leftArrowButtonText='Open previous month'
            rightArrowButtonText='Open next month'
            renderInput={(params) => (
              <FormControlUnstyled>
                <InputLabel id='demo-simple-select-label'>Date &amp; Time</InputLabel>
                <TextField {...params} fullWidth={true} error={Boolean(errors.date?.message)} />
              </FormControlUnstyled>
            )}
          />
        </LocalizationProvider>
        {errors.date?.message && <p style={{ color: 'red' }}>{errors.date?.message}</p>}

        <Controller
          name='owner'
          defaultValue={false}
          control={control}
          render={({ field }) => (
            <FormControlUnstyled style={{ display: 'flex', alignItems: 'center' }}>
              <Switch id='owner' {...field} />
              <InputLabel htmlFor='owner'>Are you the owner?</InputLabel>
            </FormControlUnstyled>
          )}
        />
        {errors.owner?.message && <p style={{ color: 'red' }}>{errors.owner?.message}</p>}

        <Button type='submit'>Submit</Button>
      </Stack>
    </Stack>
  )
}
