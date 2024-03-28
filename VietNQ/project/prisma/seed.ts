import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.upsert({
    where: { id: 1998 },
    update: {},
    create: {
      name: 'User 1',
      email: 'user1@gmail.com',
      password: '123123',
    },
  });
  console.log(user1);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
