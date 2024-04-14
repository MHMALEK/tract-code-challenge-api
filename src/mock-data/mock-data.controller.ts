import { Controller, Get, Query } from '@nestjs/common';
import { MockDataService } from './mock-data.service';

@Controller('mock-data')
export class MockDataController {
  constructor(private readonly mockDataService: MockDataService) {}

  @Get('orders')
  getOrders() {
    const suppliers = this.mockDataService.generateSuppliers();
    return this.mockDataService.generateOrders(suppliers);
  }

  @Get('suppliers')
  getSuppliersByCity(@Query('city') city: string) {
    return this.mockDataService.getSuppliersByCity(city);
  }

  @Get('contaminations')
  getContaminations() {
    const suppliers = this.mockDataService.generateSuppliers();
    return this.mockDataService.generateContaminations(suppliers);
  }
  @Get('initial-center')
  getInitialCenter() {
    // return coordinate of Amsterdam (just hardcoded as sake of speed and it's only a code challeng and not a real app)
    return { lat: 52.29, lng: 4.73 };
  }
}
