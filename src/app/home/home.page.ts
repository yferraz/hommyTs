import { Component, OnInit } from '@angular/core';

class Republica {
  nome: string;
  estado: string;
  cidade: string;
  rua: string;
  numero: string;
  totalBanheiro: number;
  possuiWifi: boolean;
  possuiGaragem: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})


export class HomePage implements OnInit {
  republicas: Republica[];

  constructor() { }

  ngOnInit() {
    this.republicas = [
      {
        nome: 'UniverCidade',
        estado: 'Rio de Janeiro',
        cidade: 'Rio de Janeiro',
        rua: 'Rua Doutor Estranho',
        numero: '16',
        totalBanheiro: 2,
        possuiWifi: true,
        possuiGaragem: false,
      },
      {
        nome: 'Casa chata',
        estado: 'Surrey',
        cidade: 'Little Whinging',
        rua: 'Rua dos Alfeneiros',
        numero: '4',
        totalBanheiro: 1,
        possuiWifi: false,
        possuiGaragem: false,
      },
      {
        nome: 'Seu lugar',
        estado: 'São Paulo',
        cidade: 'Santos',
        rua: 'Rua 32 de Fevereiro',
        numero: '77',
        totalBanheiro: 3,
        possuiWifi: true,
        possuiGaragem: true,
      },
      {
        nome: 'Nosso Cantinho',
        estado: 'Goiás',
        cidade: 'Goiania',
        rua: 'Rua 26 de Novembro',
        numero: '18',
        totalBanheiro: 2,
        possuiWifi: false,
        possuiGaragem: true,
      },
    ];

  }

}
