import { RegisterUserInput } from '@/types/user';
import { useToast } from './useToast';
import { useRouter } from 'next/navigation';
import useRegisterModal from './useRegisterModal';
import { register } from '@/api/auth';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export function useRegisterMutation() {
  const toast = useToast();
  const router = useRouter();
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
      router.push('/');
    },
    onError: (err: AxiosError) => {
      toast({
        title: 'An error occurred.',
        description: err.message || 'Something went wrong.',
        status: 'error',
      });
    },
  });

  return mutation;
}
