import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'

import prisma from '@/app/libs/prismadb'

/* 
  ? USE export function syntax!
  ! ERROR -> Detected default export in '/home/environment/nextjs/airbnb-clone/app/api/register/route.ts'. Export a named export for each HTTP method instead
*/

export async function POST(request: Request) {
  const body = await request.json()
  const { email, name, password } = body

  const hashedPassword = await bcrypt.hash(password, 12)

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  })

  return NextResponse.json(user)
}
