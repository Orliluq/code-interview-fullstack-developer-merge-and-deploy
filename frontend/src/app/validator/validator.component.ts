import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ValidationResponse {
  isValid: boolean;
}

@Component({
  selector: 'validation',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.css'],
})
export class ValidatorComponent {
  rut = '';
  validatorResult: ValidationResponse | null = null;
  hasSubmitted = false;

  constructor(private http: HttpClient) {}

  validateRut() {
    const rutRegex = /^\d{7,8}-?\d{1}$/;
    if (!rutRegex.test(this.rut)) {
      this.validatorResult = { isValid: false };
      this.hasSubmitted = true;
      return;
    }

    this.http
      .post<ValidationResponse>('http://localhost:3000/api/validation', {
        rut: this.rut,
      })
      .subscribe((response: ValidationResponse) => {
        this.validatorResult = response;
        this.hasSubmitted = true;
      });
  }
}

/* Formatos válidos:
Sólo números. Ej: 162992228.
Números, puntos y guión. Ej: 16.299.222-8.
Números y guión. Ej: 16299222-8. */
