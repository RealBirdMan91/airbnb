import { LoginUserInput, RegisterUserInput } from '@/types/user';
import axios from 'axios';
import { signIn } from 'next-auth/react';

export const register = async (input: RegisterUserInput) => {
  const res = axios.post('/api/auth/register', input);
  return res;
};

export const login = async (input: LoginUserInput) => {
  const res = await signIn('credentials', { ...input, redirect: false });

  if (res?.error) {
    throw new Error(res.error);
  }

  return 'success';
};
