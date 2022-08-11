import { Component, OnInit } from '@angular/core';
import { Album } from '../album';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public albums: Album[] = [{
    id: 'hola2',
    title: 'Jagged Little Pill',
    artist: 'Alanis Morissette',
    songs: 'You Oughta Know, Ironic, Perfect',
    URLImage: 'https://www.lahiguera.net/musicalia/artistas/alanis_morissette/disco/10630/portada-p.jpg'
  },
  {
    id: 'hola1',
    title: 'Gozo Poderoso',
    artist: 'Aterciopelados',
    songs: 'Album, Rompecabezas, Luto',
    URLImage: 'https://i.pinimg.com/564x/a8/9c/37/a89c37ca3d8526ddd290b38a546e11ea.jpg'
  },
  {
    id: '',
    title: '',
    artist: '',
    songs: '',
    URLImage: ''
  }
];
  constructor() { }

  ngOnInit(): void {
    console.log(this.albums);
  }

}
