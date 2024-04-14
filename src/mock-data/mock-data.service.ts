import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';
export enum CITIES_NAME {
  PARIS = 'paris',
  AMSTERDAM = 'amsterdam',
  BERLIN = 'berlin',
  TOKYO = 'tokyo',
}

export enum SUPPLIER_STATUS_TYPE {
  SAFE = 'safe',
  CONTAMINATED = 'contiminated',
}

export enum OrderStatus {
  SOLD = 'sold',
  IN_STOCK = 'in stock',
  DISCARDED = 'Discarded',
}

@Injectable()
export class MockDataService {
  generateSuppliers() {
    const cities: Array<CITIES_NAME> = [
      CITIES_NAME.AMSTERDAM,
      CITIES_NAME.BERLIN,
      CITIES_NAME.PARIS,
      CITIES_NAME.TOKYO,
    ];

    return Array.from({ length: 100 }, () => {
      const city = faker.helpers.arrayElement(cities);

      let latitude, longitude;
      switch (city) {
        case CITIES_NAME.BERLIN:
          latitude = faker.datatype.float({ min: 52.3, max: 52.6 });
          longitude = faker.datatype.float({ min: 13.2, max: 13.6 });
          break;
        case CITIES_NAME.AMSTERDAM:
          latitude = faker.datatype.float({ min: 52.29, max: 52.42 });
          longitude = faker.datatype.float({ min: 4.73, max: 5.03 });
          break;
        case CITIES_NAME.PARIS:
          latitude = faker.datatype.float({ min: 48.7, max: 48.9 });
          longitude = faker.datatype.float({ min: 2.2, max: 2.5 });
          break;
        case CITIES_NAME.TOKYO:
          latitude = faker.datatype.float({ min: 35.5, max: 35.9 });
          longitude = faker.datatype.float({ min: 139.5, max: 139.9 });
          break;
      }

      return {
        name: faker.company.name(),
        location: {
          latitude,
          longitude,
        },
        city,
        status: faker.helpers.arrayElement([
          SUPPLIER_STATUS_TYPE.SAFE,
          SUPPLIER_STATUS_TYPE.CONTAMINATED,
        ]),
      };
    });
  }
  getSuppliersByCity(city: string) {
    const suppliers = this.generateSuppliers();
    return suppliers.filter((supplier) => supplier.city === city);
  }

  generateOrders(suppliers) {
    return suppliers.flatMap((supplier) =>
      Array.from({ length: 100 }, () => ({
        supplier: supplier.name,
        quantity: faker.datatype.number({
          min: 0,
          max: 100000,
        }),
        purchasePrice: faker.commerce.price(),
        sellingPrice: faker.commerce.price(),
        profit: faker.number.int({ min: 5, max: 20 }),
        status: faker.helpers.arrayElement([
          OrderStatus.DISCARDED,
          OrderStatus.IN_STOCK,
          OrderStatus.SOLD,
        ]),
      })),
    );
  }

  generateContaminations(suppliers) {
    return suppliers.map((supplier) => ({
      supplier: supplier.name,
      date: faker.date.past(),
      estimatedLoss: faker.finance.amount(),
    }));
  }
}
