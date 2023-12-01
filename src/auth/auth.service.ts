import { Injectable } from '@nestjs/common/decorators'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signup() {
    return {
      msg: 'i signed up',
    }
  }

  signin() {
    return {
      msg: 'i signed in.',
    }
  }
}
