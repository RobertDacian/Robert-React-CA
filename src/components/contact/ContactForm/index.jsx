import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { StyledWrapper, StyledError } from './ContactStyled';
import * as yup from 'yup';

const schema = yup.object().shape({
  fullName: yup
    .string()
    .min(3, 'Provide your full name here ( min. 3 characters)')
    .required(),
  subject: yup
    .string()
    .min(3, 'Provide a subject here ( min. 3 characters)')
    .required(),
  email: yup
    .string()
    .email('Please enter a valid email address.')
    .required('Email field is required.'),
  body: yup
    .string()
    .min(3, 'Provide a message ( min. 3 characters)')
    .required(),
});

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <StyledWrapper>
      <div className='section wrapper'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor='fullName'>Full name:</label>
            <input type='text' name='fullName' {...register('fullName')} />
            {errors.email && (
              <StyledError>{errors.fullName.message}</StyledError>
            )}
          </div>
          <div>
            <label htmlFor='subject'>Subject:</label>
            <input type='text' name='subject' {...register('subject')} />
            {errors.email && (
              <StyledError>{errors.subject.message}</StyledError>
            )}
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input type='email' name='email' {...register('email')} />
            {errors.email && <StyledError>{errors.email.message}</StyledError>}
          </div>
          <div>
            <label htmlFor='body'>Body:</label>
            <textarea name='body' {...register('body')} />
            {errors.email && <StyledError>{errors.body.message}</StyledError>}
          </div>
          <button className='btn' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </StyledWrapper>
  );
}

export default ContactForm;
