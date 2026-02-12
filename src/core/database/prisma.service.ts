import { OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { Logger } from "@nestjs/common";
import { PrismaPg } from "@prisma/adapter-pg";
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy{
  constructor(){
    const adapter = new PrismaPg({url:process.env.DATABASE_URL})
    super({adapter})
  }
  async onModuleInit() {
    await this.$connect()
    Logger.log("✅Prisma connected")
  }

  async onModuleDestroy() {
    await this.$disconnect()
    Logger.log("⛔️Prisma diconnect")
  }
}