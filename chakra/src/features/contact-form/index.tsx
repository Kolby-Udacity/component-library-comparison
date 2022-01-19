import { FC } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button, FormControl, FormErrorMessage, FormLabel, Input, Select, Stack, Switch } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'

import 'react-datepicker/dist/react-datepicker.css'

const contactFormSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email().nonempty(),
  topic: z.enum(['', 'business', 'career', 'security']),
  date: z.string(),
  owner: z.boolean(),
})

type ContactForm = z.infer<typeof contactFormSchema>

export const ContactForm: FC = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
  })

  const processForm = (data: any) => console.log(data)

  return (
    <Stack direction='row' as='form' spacing={8} onSubmit={handleSubmit(processForm)}>
      <Stack spacing={4} width='50%'>
        <FormControl isInvalid={Boolean(errors.name)}>
          <FormLabel htmlFor='name'>Name</FormLabel>
          <Input id='name' type='name' {...register('name')} />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={Boolean(errors.email)}>
          <FormLabel htmlFor='email'>Email address</FormLabel>
          <Input id='email' type='email' {...register('email')} />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
      </Stack>
      <Stack spacing={4} width='50%'>
        <FormControl isInvalid={Boolean(errors.topic)}>
          <FormLabel htmlFor='topic'>Topic</FormLabel>
          <Select id='topic' placeholder=' ' {...register('topic')}>
            <option value='business'>Business</option>
            <option value='career'>Career</option>
            <option value='security'>Security</option>
          </Select>
          <FormErrorMessage>{errors.topic?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={Boolean(errors.date)}>
          <FormLabel htmlFor='date'>Date &amp; time</FormLabel>
          <Input type='datetime-local' {...register('date')} />
          <FormErrorMessage>{errors.date?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={Boolean(errors.owner)}>
          <Stack direction='row' spacing={2} alignItems='center'>
            <Switch id='owner' size='lg' {...register('owner')} />
            <FormLabel htmlFor='owner'>Are you the owner?</FormLabel>
          </Stack>
          <FormErrorMessage>{errors.owner?.message}</FormErrorMessage>
        </FormControl>

        <Button type='submit'>Submit</Button>
      </Stack>
    </Stack>
  )
}
