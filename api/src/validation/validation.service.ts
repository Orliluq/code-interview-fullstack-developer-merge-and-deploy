import { Injectable } from '@nestjs/common';

@Injectable()
export class ValidationService {
  private readonly FACTOR_SEQUENCE = [2, 3, 4, 5, 6, 7];

  // Método para validar un RUT chileno
  validateRut(rut: string): boolean {
    // Elimino los espacios y puntos del RUT
    if (rut) {
      rut = rut.replace(/\s/g, '').replace(/\./g, '');
    } else {
      return false;
    }

    // Separo el RUT en número y dígito verificador
    const cleanRut = rut.split('-');
    const rutNumber = cleanRut[0];
    const verifierDigit = cleanRut[1];

    // Verifico el formato del RUT
    if (!this.isValidRutFormat(rutNumber, verifierDigit)) {
      return false;
    }

    // Convierto el número del RUT en un array de dígitos
    const rutNumberArray = rutNumber
      .split('')
      .map((char) => parseInt(char, 10));

    let sum = 0;
    let multiplierIndex = 0;

    // Calculo la suma ponderada de los dígitos del RUT
    for (let i = rutNumberArray.length - 1; i >= 0; i--) {
      const digit = rutNumberArray[i];
      const multiplier = this.FACTOR_SEQUENCE[multiplierIndex % 6];
      sum += digit * multiplier;
      multiplierIndex++;
    }

    // Calculo el dígito verificador
    const calculatedVerifierDigit = this.calculateVerifierDigit(sum);

    // Valido si el dígito verificador ingresado coincide con el calculado
    return calculatedVerifierDigit === parseInt(verifierDigit, 10);
  }

  // Método para verificar el formato del RUT
  private isValidRutFormat(rutNumber: string, verifierDigit: string): boolean {
    return /^[0-9]{7,8}$/.test(rutNumber) && /[0-9K]/.test(verifierDigit);
  }

  // Método para calcular el dígito verificador
  private calculateVerifierDigit(sum: number): number {
    const rest = sum % 11;
    return rest === 0 ? 0 : 11 - rest;
  }

  validateAndReturnMessage(rut: string): string {
    if (this.validateRut(rut)) {
      return 'RUT es válido';
    } else {
      return 'RUT es inválido';
    }
  }
}

const validationService = new ValidationService();

console.log(validationService.validateRut('12345678-5'));
console.log(validationService.validateRut('11222333-9'));
console.log(validationService.validateRut('9876543-3'));
console.log(validationService.validateRut('12345678-K'));
console.log(validationService.validateRut('11222333-X'));
console.log(validationService.validateRut(''));
