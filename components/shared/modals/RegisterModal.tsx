'use client';

import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import useRegisterModal from '@/hooks/useRegisterModal';
import { RegisterUserInput, RegisterUserSchema } from '@/types/user';
import { useRegisterMutation } from '@/hooks/useAuth';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../forms/Input';

function RegisterModal() {
  const { isOpen, onClose } = useRegisterModal();
  const { isLoading, mutate } = useRegisterMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUserInput>({
    resolver: zodResolver(RegisterUserSchema),
  });

  function onSubmit(data: RegisterUserInput) {
    console.log(data);
  }

  return (
    <Modal
      disabled={isLoading}
      isOpen={isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-4">
        <Heading title="Welcome to Airbnb" subtitle="Register to continue" />
        <Input
          id="email"
          {...register('email')}
          error={errors.email}
          placeholder="julian@web.de"
          type="email"
        />
        <Input
          id="name"
          {...register('name')}
          error={errors.name}
          placeholder="Julian Vogel"
          type="text"
        />
        <Input
          id="password"
          {...register('password')}
          error={errors.password}
          placeholder="password"
          type="password"
        />
      </div>
    </Modal>
  );
}

export default RegisterModal;
