import { RegisterUserInput } from '@/types/user';
import axios from 'axios';

export const register = async (input: RegisterUserInput) => {
  const res = axios.post('/api/auth/register', input);
  return res;
};
