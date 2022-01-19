import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'
import { DateTimePicker, LocalizationProvider } from '@mui/lab'
import DateAdapter from '@mui/lab/AdapterDateFns'
import {
  Button,
  FormControlUnstyled,
  FormHelperText,
  InputLabel,
  NativeSelect,
  Stack,
  Switch,
  TextField,
} from '@mui/material'

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
    register,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
  })

  const processForm = (data: any) => console.log(data)

  return (
    <Stack direction='row' component='form' spacing={4} onSubmit={handleSubmit(processForm)}>
      <Stack spacing={2} width='50%'>
        <FormControlUnstyled>
          <InputLabel htmlFor='name'>Name</InputLabel>
          <TextField id='name' fullWidth={true} error={Boolean(errors.name?.message)} {...register('name')} />
          <FormHelperText error={Boolean(errors.name?.message)}>{errors.name?.message}</FormHelperText>
        </FormControlUnstyled>
        <FormControlUnstyled>
          <InputLabel htmlFor='email'>Email address</InputLabel>
          <TextField id='email' fullWidth={true} error={Boolean(errors.email?.message)} {...register('email')} />
          <FormHelperText error={Boolean(errors.email?.message)}>{errors.email?.message}</FormHelperText>
        </FormControlUnstyled>
      </Stack>
      <Stack spacing={2} width='50%'>
        <FormControlUnstyled>
          <InputLabel id='topic'>Topic</InputLabel>
          <NativeSelect variant='filled' fullWidth={true} error={Boolean(errors.topic?.message)} {...register('topic')}>
            <option value=''></option>
            <option value='business'>Business</option>
            <option value='career'>Career</option>
            <option value='security'>Security</option>
          </NativeSelect>
          <FormHelperText error={Boolean(errors.topic?.message)}>{errors.topic?.message}</FormHelperText>
        </FormControlUnstyled>
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
                <InputLabel id='date'>Date &amp; Time</InputLabel>
                <TextField {...params} fullWidth={true} error={Boolean(errors.date?.message)} />
                <FormHelperText error={Boolean(errors.date?.message)}>{errors.date?.message}</FormHelperText>
              </FormControlUnstyled>
            )}
          />
        </LocalizationProvider>

        <FormControlUnstyled style={{ display: 'flex', alignItems: 'center' }}>
          <Switch id='owner' {...register('owner')} />
          <InputLabel htmlFor='owner'>Are you the owner?</InputLabel>
          <FormHelperText error={Boolean(errors.owner?.message)}>{errors.owner?.message}</FormHelperText>
        </FormControlUnstyled>

        <Button type='submit'>Submit</Button>
      </Stack>
    </Stack>
  )
}
