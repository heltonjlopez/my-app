import { Component } from '@angular/core';
import { interfaceResultado } from './interfaces/interfaceM';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Resultados de partidos de Futbol';
  descripcion = 'Esta es una aplicacion para leer ver marcadores de futbol'
  
  resultados: interfaceResultado[] = [
    {
      equipo1: 'Liverpool',
      equipo2: 'Real Madrid',
      marcadorE1: 2,
      marcadorE2: 5,
      descripcionJuego: 'Partido de ida de 8vos de la UCL',
      fecha: '21 de Feb del 2023',
      liga: 'UCL'
    },

    {
      equipo1: 'Eintracht Frankfurt',
      equipo2: 'Napoli',
      marcadorE1: 0,
      marcadorE2: 2,
      descripcionJuego: 'Partido de ida de 8vos de la UCL',
      fecha: '21 de Feb del 2023',
      liga: 'UCL'
    },

    {
      equipo1: 'PSG',
      equipo2: 'LOSC',
      marcadorE1: 4,
      marcadorE2: 3,
      descripcionJuego: 'Partido de liga, jornada 24',
      fecha: '19 de Feb del 2023',
      liga: 'Ligue 1'
    },
  ]
}
