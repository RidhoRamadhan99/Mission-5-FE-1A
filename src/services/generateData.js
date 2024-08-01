import { faker } from '@faker-js/faker';
import axios from 'axios';

function calculateDiscountedPrice(harga, diskon) {
  if (!harga || !diskon) {
    return null;
  }

  const hargaNumeric = parseFloat(harga.replace('Rp ', '').replace('k', '')) * 1000;
  const diskonNumeric = parseFloat(diskon.replace('%', '')) / 100;
  const hargaDisc = hargaNumeric * (1 - diskonNumeric);
  const hargaDiscFormatted = `Rp ${(hargaDisc / 1000).toFixed(0)}k`;
  return hargaDiscFormatted;
}

const generateData = () => {
  const data = [];

  for (let i = 0; i < 20; i++) {
    const harga = `Rp ${faker.finance.amount(100, 500, 0)}k`;
    const hasDiscount = faker.datatype.boolean(); // Determine if there's a discount
    const discount = hasDiscount ? `${faker.number.int({ min: 10, max: 70 })}%` : null;
    const hargaDisc = discount ? calculateDiscountedPrice(harga, discount) : null;

    data.push({
      id: i + 1,
      bannerImg: faker.image.business(),
      judul: faker.commerce.productName(),
      desc: faker.commerce.productDescription(),
      profileImg: faker.image.avatar(),
      author: faker.person.fullName(),
      pekerjaan: faker.person.jobTitle(),
      harga: harga,
      discount: discount,
      hargaDisc: hargaDisc,
      rate: {
        rateAvg: faker.number.float({ min: 1, max: 5, multipleOf: 0.1 }),
        rateCount: faker.number.int({ min: 1, max: 500 }),
      },
      category: faker.commerce.department(),
      durasi: `${faker.number.int({ min: 1, max: 10 })} jam`,
    });
  }

  return data;
};

const postDataToMockAPI = async (data) => {
  const apiEndpoint = 'https://66a313e444aa6370457fbc3e.mockapi.io/products'; // Replace with your correct MockAPI endpoint
  try {
    for (const item of data) {
      await axios.post(apiEndpoint, item);
      console.log(`Posted item with id ${item.id}`);
    }
    console.log('All data posted successfully');
  } catch (error) {
    console.error('Error posting data to MockAPI:', error);
  }
};

const data = generateData();
postDataToMockAPI(data);
