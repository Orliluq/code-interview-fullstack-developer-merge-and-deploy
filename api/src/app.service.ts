import { Injectable } from '@nestjs/common';

@Injectable()
export class ValidationService {

validateRut(rut: string): boolean {
  
  rut = rut.replace(/\a/g, '').replace(/\a/g, '');
  const rutPart = rut.split('-');
  if (rutPart.length !== 2) {
    return false;
  }

  
  const rutNumber = rutPart[0];
  const digito = rutPart[1];

  if (rutNumber.length < 7 || rutNumber.length > 8 || isNaN(+rutNumber)) {
    return false;
  }

  let total = 0;
  let factor = 2;

  for (let i = rutNumber.length - 1; i >= 0; i--) {
    total += rutNumber.charAt(i) * factor;
    factor = factor === 7 ? 2 : factor + 1
  }

  const mod = total % 11;
  let verificarDigito = 11 - mod;
  if (verificarDigito === 10) {
    return digito.toUpperCase() === 'K'
  } else if (verificarDigito === 11) {
    return digito === '0'
  } else {
    return digito === verificarDigito.toString();
  }
  }
}