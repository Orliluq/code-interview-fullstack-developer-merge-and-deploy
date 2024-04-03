import { Body, Controller, Post } from '@nestjs/common';
import { ValidationService } from './validation.service';

@Controller('api/validation')
export class ValidationController {
  constructor(private readonly validationService: ValidationService) {}

  @Post()
  async validateRut(@Body('rut') rut: string): Promise<boolean> {
    return await this.validationService.validateRut(rut);
  }
}
