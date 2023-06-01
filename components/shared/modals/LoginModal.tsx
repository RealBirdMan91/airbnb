'use client';

import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import useLoginModal from '@/hooks/useLoginModal';
import { LoginUserInput } from '@/types/user';
import { useLoginMutation } from '@/hooks/useAuth';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../forms/Input';
import Button from '../buttons/Button';

function LoginModal() {
  const { isOpen, onClose } = useLoginModal();

  const { isLoading, mutate, registerForm, handleFormSubmit, formState } =
    useLoginMutation();

  function onSubmit(data: LoginUserInput) {
    mutate(data);
  }

  function Footer() {
    return (
      <div className="mt-3 flex flex-col gap-4">
        <hr />
        <Button outline icon={FcGoogle}>
          Continue with Google
        </Button>
        <Button outline icon={AiFillGithub}>
          Continue with Github
        </Button>
      </div>
    );
  }

  return (
    <Modal
      disabled={isLoading}
      isOpen={isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={onClose}
      onSubmit={handleFormSubmit(onSubmit)}
      footer={<Footer />}
    >
      <div className="flex flex-col gap-4">
        <Heading title="Welcome back" subtitle="Login to continue" />
        <Input
          id="email"
          {...registerForm('email')}
          error={formState.errors.email}
          placeholder="julian@web.de"
          type="email"
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

export default LoginModal;
