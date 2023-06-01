import {
  LoginUserInput,
  LoginUserSchema,
  RegisterUserInput,
  RegisterUserSchema,
} from '@/types/user';
import { useToast } from './useToast';
import useRegisterModal from './useRegisterModal';
import { login, register } from '@/services/auth';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import useLoginModal from './useLoginModal';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

export function useLoginMutation() {
  const toast = useToast();
  const {
    register: registerForm,
    handleSubmit: handleFormSubmit,
    formState,
    reset,
  } = useForm<LoginUserInput>({
    resolver: zodResolver(LoginUserSchema),
  });
  const { onClose } = useLoginModal();
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: (values: LoginUserInput) => login(values),
    onSuccess: () => {
      toast({
        title: '🥳 Success',
        description: "You've successfully logged in.",
        status: 'success',
      });
      reset({
        email: '',
        password: '',
      });
      router.refresh();
      onClose();
    },
    onError: (err: AxiosError) => {
      toast({
        title: 'Failed to login',
        description: err.message || 'Something went wrong',
        status: 'error',
      });
    },
  });

  return {
    ...mutation,
    registerForm,
    handleFormSubmit,
    formState,
  };
}

export function useRegisterMutation() {
  const toast = useToast();
  const {
    register: registerForm,
    handleSubmit: handleFormSubmit,
    formState,

    reset,
  } = useForm<RegisterUserInput>({
    resolver: zodResolver(RegisterUserSchema),
  });
  const { onClose } = useRegisterModal();
  const mutation = useMutation({
    mutationFn: (values: RegisterUserInput) => register(values),
    onSuccess: async values => {
      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
      });
      reset({
        email: '',
        password: '',
        name: '',
      });
      onClose();
    },
    onError: (err: AxiosError) => {
      const message = (err.response?.data as string) || 'Something went wrong.';
      if (err.response?.status === 422) {
        return toast({
          title: 'Wrong user credentials',
          description: message || 'Something went wrong.',
          status: 'error',
        });
      }
      toast({
        title: 'An error occurred.',
        description: 'Something went wrong.',
        status: 'error',
      });
    },
  });

  return {
    ...mutation,
    registerForm,
    handleFormSubmit,
    formState,
  };
}
