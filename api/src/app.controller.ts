import { Controller, Post, Body } from '@nestjs/common';
import { ValidationService } from './app.service';

@Controller('api/validation')
export class ValidationController {
  constructor(private readonly validationService: ValidationService) {}

  @Post()
  validateRut(@Body('rut') rut: string): boolean {
    return this.validationService.validateRut(rut);
  }
}
