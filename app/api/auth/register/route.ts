import { RegisterUserInput } from '@/types/user';
import { stat } from 'fs';
import { NextRequest, NextResponse } from 'next/server';

interface IRequest extends NextRequest {
  json: () => Promise<RegisterUserInput>;
}

export async function POST(request: IRequest) {
  const { email, password } = await request.json();

  return NextResponse.json(
    {
      message: `User ${email} created`,
    },
    {
      status: 201,
    }
  );
}
