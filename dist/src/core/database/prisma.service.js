"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaService = void 0;
const client_1 = require("@prisma/client");
const common_1 = require("@nestjs/common");
const adapter_pg_1 = require("@prisma/adapter-pg");
class PrismaService extends client_1.PrismaClient {
    constructor() {
        const adapter = new adapter_pg_1.PrismaPg({ url: process.env.DATABASE_URL });
        super({ adapter });
    }
    async onModuleInit() {
        await this.$connect();
        common_1.Logger.log("✅Prisma connected");
    }
    async onModuleDestroy() {
        await this.$disconnect();
        common_1.Logger.log("⛔️Prisma diconnect");
    }
}
exports.PrismaService = PrismaService;
//# sourceMappingURL=prisma.service.js.map