import { RegisterUserInput } from '@/types/user';
import { useToast } from './useToast';
import useRegisterModal from './useRegisterModal';
import { register } from '@/api/auth';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export function useRegisterMutation() {
  const toast = useToast();
  const { onClose } = useRegisterModal();

  const mutation = useMutation({
    mutationFn: (values: RegisterUserInput) => register(values),
    onSuccess: () => {
      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
      });
      onClose();
    },
    onError: (err: AxiosError) => {
      if (err.response?.status === 422) {
        return toast({
          title: 'Wrong user credentials',
          description: 'Falsche user eingabe',
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

  return mutation;
}
