import { Component } from '@angular/core';
import { interfaceResultado } from './interfaces/interfaceM';
import { interfaceInfo } from './interfaces/interfaceI';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Resultados de partidos de Futbol';
  descripcion = 'Esta es una aplicacion para ver marcadores de futbol'
  
  resultados: interfaceResultado[] = [
    {
      equipo1: 'Liverpool',
      equipo2: 'Real Madrid',
      imagenE1: 'https://paladarnegro.net/escudoteca/inglaterra/premier/img/liverpool.jpg',
      imagenE2: 'https://paladarnegro.net/escudoteca/espana/laliga/img/realmadrid.jpg',
      marcadorE1: 2,
      marcadorE2: 5,
      descripcionJuego: 'Partido de ida de 8vos de la UCL',
      fecha: '21 de Feb del 2023',
      liga: 'UCL'
    },

    {
      equipo1: 'Eintracht Frankfurt',
      equipo2: 'Napoli',
      imagenE1: 'https://paladarnegro.net/escudoteca/alemania/bundesliga/img/eintrachtfrankfurt.jpg',
      imagenE2: 'https://paladarnegro.net/escudoteca/italia/seriea/img/napoli.jpg',
      marcadorE1: 0,
      marcadorE2: 2,
      descripcionJuego: 'Partido de ida de 8vos de la UCL',
      fecha: '21 de Feb del 2023',
      liga: 'UCL'
    },

    {
      equipo1: 'PSG',
      equipo2: 'LOSC',
      imagenE1: 'https://paladarnegro.net/escudoteca/francia/ligue1/img/psg.jpg',
      imagenE2: 'https://paladarnegro.net/escudoteca/francia/ligue1/img/lille.jpg',
      marcadorE1: 4,
      marcadorE2: 3,
      descripcionJuego: 'Partido de liga, jornada 24',
      fecha: '19 de Feb del 2023',
      liga: 'Ligue 1'
    },
  ]

  info: interfaceInfo[] = [
    {
      link1: 'https://www.uefa.com/uefachampionsleague/stories/',
      link2: 'https://www.youtube.com/@UEFA/videos',
      link3: 'https://www.starplus.com/en-hn'
    }
  ]
}
