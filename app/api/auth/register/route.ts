import { RegisterUserInput, RegisterUserSchema } from '@/types/user';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { withValidation } from '@/lib/withValidation';
import { db } from '@/lib/db';

export const POST = withValidation<RegisterUserInput>(
  RegisterUserSchema,
  async ({ email, password, name }) => {
    const hashedPassword = await bcrypt.hash(password, 12);

    try {
      const user = await db.user.create({
        data: {
          email,
          password: hashedPassword,
          name,
        },
      });
      return NextResponse.json(user, {
        status: 201,
      });
    } catch (err) {
      return NextResponse.json('User already exsist', {
        status: 422,
      });
    }
  }
);
