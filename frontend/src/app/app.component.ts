import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class AppComponent implements OnInit {
  rut: string = '';
  hasSubmitted: boolean = false;
  validatorResult: any;
  showButton: boolean = false;

  checkInput() {
    this.showButton = this.rut.trim() !== '';
  }
  validateRut() {
    this.hasSubmitted = true;
    this.validatorResult = { isValid: this.rut.length > 7 };
  }

  ngOnInit(): void {}
  title = 'frontend';
}
