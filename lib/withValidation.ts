import { NextRequest, NextResponse } from 'next/server';
import { ZodType } from 'zod';

export const withValidation = <T = any>(
  schema: ZodType<T>,
  cb: (body: T) => void
) => {
  return async (request: NextRequest) => {
    try {
      const body = await request.json();
      console.log(body);
      const validatedBody = schema.parse(body);
      return cb(validatedBody);
    } catch (err) {
      console.log(err);
      return NextResponse.json('Invalid data', {
        status: 422,
      });
    }
  };
};
