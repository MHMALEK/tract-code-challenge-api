import { Controller, Get, Query } from '@nestjs/common';
import { CITIES_NAME, MockDataService } from './mock-data.service';
import * as suppliersAmsterdam from './json-data/suppliers-amsterdam.json';
import * as suppliersBerlin from './json-data/suppliers-berlin.json';
import * as contaminations from './json-data/contaminations.json';
import * as orders from './json-data/orders.json';
@Controller('mock-data')
export class MockDataController {
  constructor(private readonly mockDataService: MockDataService) {}

  @Get('orders')
  getOrders() {
    return orders;
  }

  @Get('suppliers')
  getSuppliersByCity(@Query('city') city: string) {
    switch (city) {
      case CITIES_NAME.BERLIN:
        return suppliersBerlin;
      case CITIES_NAME.AMSTERDAM:
        return suppliersAmsterdam;
      default:
        return suppliersAmsterdam;
    }
  }

  @Get('contaminations')
  getContaminations() {
    return contaminations;
  }
  @Get('initial-center')
  getInitialCenter() {
    // return coordinate of Amsterdam (just hardcoded as sake of speed and it's only a code challeng and not a real app)
    return { lat: 52.29, lng: 4.73 };
  }
  @Get('total-orders')
  getTotalOrders() {
    return {
      total_cost: 3000,
      total_orders: 100,
      total_profit: 1000,
      total_revenue: 2000,
      total_contaminations: 10,
      total_suppliers: 20,
      total_customers: 30,
      total_products: 40,
      total_cities: 2,
      total_countries: 2,
    };
  }
}
