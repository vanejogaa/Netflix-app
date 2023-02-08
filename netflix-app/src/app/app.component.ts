import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix-app';

    public accionFilms = {
      section:"Acción",
      films: [{
        filmTitle:"Ejército de los muertos",
        Image: "./assets/images/Accion/ejercitomuertos.jpg"
      },
      {
        filmTitle:"El protector",
        Image: "./assets/images/Accion/elprotector.webp"
      },
      {
        filmTitle:"Equalizer 2",
        Image: "./assets/images/Accion/equalizer2.webp"
      },
      {
        filmTitle:"Heat",
        Image: "./assets/images/Accion/heat.webp"
      },
      {
        filmTitle:"Jack Reacher",
        Image: "./assets/images/Accion/jackreacher.webp"
      },
      {
        filmTitle:"John Wick 2",
        Image: "./assets/images/Accion/johnwick2.webp"
      },
      {
        fiLmTitle:"Kill Bill 2",
        Image: "./assets/images/Accion/killbill2.webp"
      },
      {
        fiLmTitle:"Misión imposible",
        Image: "./assets/images/Accion/misionimposiblenacion.webp"
      },
      {
        fiLmTitle:"Renacido",
        Image: "./assets/images/Accion/renacido.webp"
      },
      {
        fiLmTitle:"Terminator 2",
        Image: "./assets/images/Accion/terminator2.webp"
      },
      {
        fiLmTitle:"Guerra mundial Z",
        Image: "./assets/images/Accion/worlswarz.webp"
      }
    ]
  }
      public animeFilms = {
      section:"Anime",
      films: [{
        filmTitle:"Ajins",
        Image: "./assets/images/Anime/ajin.jpg"
       },
       {
        filmTitle:"Catillo ambulante",
        Image: "./assets/images/Anime/castilloambulante.webp"
       },
       {
        filmTitle:"Chihiro",
        Image: "./assets/images/Anime/chihiro.webp"
       },
       {
        filmTitle:"Evangelion",
        Image: "./assets/images/Anime/evangelion.webp"
       },
       {
        filmTitle:"Arise",
        Image: "./assets/images/Anime/gitsarise.webp"
       },
       {
        filmTitle:"Gundam",
        Image: "./assets/images/Anime/gundam.webp"
       },
       {
        filmTitle:"El castillo en el cielo",
        Image: "./assets/images/Anime/laputa.webp"
       },
       {
        filmTitle:"Mononoke",
        Image: "./assets/images/Anime/mononoke.webp"
       },
       {
        filmTitle:"Ninokuni",
        Image: "./assets/images/Anime/ninokuni.jpg"
       },
       {
        filmTitle:"Perfect blue",
        Image: "./assets/images/Anime/perfectblue.webp"
       },
      ],
    }
      public comediaFilms = {
      section:"Comedia",
      films: [{
        filmTitle:"Casi 300",
        Image: "./assets/images/Comedia/casi300.webp"
       },
      {
        filmTitle:"Cazafantasmas",
        Image: "./assets/images/Comedia/cazafantasmas.webp"
       },
       {
        filmTitle:"Dictador",
        Image: "./assets/images/Comedia/dictador.webp"
       },
       {
        filmTitle:"Érase una vez en Holliwood",
        Image: "./assets/images/Comedia/erasehollywood.webp"
       }
      ],
    }
      public dramaFilms = {
      section:"Drama",
      films: [{
        filmTitle:"1917",
        Image: "./assets/images/Drama/1917.webp"
       },
        {
        filmTitle:"La llegada",
        Image: "./assets/images/Drama/arrival.webp"
        },
        {
        filmTitle:"El club de la lucha",
        Image: "./assets/images/Drama/clublucha.webp"
        },
        {
        filmTitle:"corazones",
        Image: "./assets/images/Drama/corazones.webp"
        },
      ],
    }
      public terrorFilms = {
      section:"Terror",
      films: [{
        filmTitle:"El Apóstol",
        Image: "./assets/images/Terror/apostol.jpg"
      },
      {
        filmTitle:"La calle del terror",
        Image: "./assets/images/Terror/calleterror.jpg"
      },
      {
        filmTitle:"Infierno bajo el agua",
        Image: "./assets/images/Terror/infiernoagua.webp"

      },
    ]
  }

}
