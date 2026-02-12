import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/database/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma : PrismaService){}
  async createUser(payload : any){
    await this.prisma.user.create({
      data: {
        username: payload.username,
        email: payload.email,
        contact: payload.contact,
        age: payload.age
      }

    })
    return{
      success: true,
      message: "User created"
    }
  }
}
