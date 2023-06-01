import { RegisterUserInput } from '@/types/user';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { db } from '@/lib/db';

interface IRequest extends NextRequest {
  json: () => Promise<RegisterUserInput>;
}

export async function POST(request: IRequest) {
  const { email, password, name } = await request.json();

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
