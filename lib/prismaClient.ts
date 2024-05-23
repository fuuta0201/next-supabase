import { PrismaClient } from '@prisma/client'

// インスタンスをグローバルで持つ
// ローカルの場合はホットリロードのせいで何回もインスタンスを生成されると困る
// prismaclientでprisma使う

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma