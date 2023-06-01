'use client';

import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import useRegisterModal from '@/hooks/useRegisterModal';
import { RegisterUserInput } from '@/types/user';
import { useRegisterMutation } from '@/hooks/useAuth';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../forms/Input';
import Button from '../buttons/Button';
import { signIn } from 'next-auth/react';

function RegisterModal() {
  const { isOpen, onClose } = useRegisterModal();
  const { isLoading, mutate, registerForm, handleFormSubmit, formState } =
    useRegisterMutation();

  function onSubmit(data: RegisterUserInput) {
    mutate(data);
  }

  function Footer() {
    return (
      <div className="mt-3 flex flex-col gap-4">
        <hr />
        <Button outline icon={FcGoogle}>
          Continue with Google
        </Button>
        <Button
          outline
          icon={AiFillGithub}
          onClick={async () => await signIn('github')}
        >
          Continue with Github
        </Button>
        <div className="mt-4  text-center font-light text-neutral-500">
          <p>
            Already have an account?
            <span className="ml-1 cursor-pointer text-blue-400">Log in</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <Modal
      disabled={isLoading}
      isOpen={isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={onClose}
      onSubmit={handleFormSubmit(onSubmit)}
      footer={<Footer />}
    >
      <div className="flex flex-col gap-4">
        <Heading title="Welcome to Airbnb" subtitle="Register to continue" />
        <Input
          id="email"
          {...registerForm('email')}
          error={formState.errors.email}
          placeholder="julian@web.de"
          type="email"
        />
        <Input
          id="name"
          {...registerForm('name')}
          error={formState.errors.name}
          placeholder="Julian Vogel"
          type="text"
        />
        <Input
          id="password"
          {...registerForm('password')}
          error={formState.errors.password}
          placeholder="password"
          type="password"
        />
      </div>
    </Modal>
  );
}

export default RegisterModal;
