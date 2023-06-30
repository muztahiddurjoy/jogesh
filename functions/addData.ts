import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function storeData(jsonData: Record<string, any>) {
  for (const key in jsonData.galis) {
    const { author, gali } = jsonData.galis[key];
    await prisma.gali.create({
      data:{
        author,
        gali,
        discriminator:0,
        photo:''
      }
    })
  }
}

const jsonData = {
  galis: {
    "1638811804548": {
      author: "Muztahid Durjoy",
      gali: "notirpola"
    },
    "1638813305263": {
      author: "Muztahid Durjoy",
      gali: "khankir pola"
    }
  }
};

storeData(jsonData)
  .then(() => {
    console.log('Data stored successfully.');
  })
  .catch((error) => {
    console.error('Error storing data:', error);
  })
  .finally(() => {
    prisma.$disconnect();
  });

