import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Carlos';
  genero: string = 'masculino';
  ban: boolean = true;
  invitacionMapa={
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[]=['Maria', 'Pedro', 'Hernando', 'Eduardo', 'Fernando','Valeria'];
  clientesMapa={
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(){

    if(this.ban){
      this.nombre = 'Valeria';
      this.genero = 'femenino';
      this.ban = false;
    }
    else{
      this.nombre = 'Carlos';
      this.genero = 'masculino';
      this.ban = true;
    }
    
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona={
    nombre: 'Valeria',
    edad: 22,
    direccion: 'Uruapan, Mich.'
  }

  //Json Pipe
  heroe=[
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: false
    },
    {
      nombre: 'Wonder Woman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    }
  ];

  //Async Pipe
  miObservable=interval(2000);

  valorPromesa= new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data de promesa');
    }, 3500);
  });

}
