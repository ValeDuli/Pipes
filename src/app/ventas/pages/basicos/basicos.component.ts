import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower: string = "valeria";
  nombreUpper: string = "VALERIA";
  nombreCompleto: string = "vAlerIa dULi";

  fecha: Date = new Date(); //el dia de hoy
}
