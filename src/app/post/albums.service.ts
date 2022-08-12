import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Album } from './album';
import { take, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private _albums = new BehaviorSubject<Album[]>([{
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
  ]);

  constructor() { }

  get albums() {
    return this._albums.asObservable();
  }

  addAlbum(title:string, artist: string, songs: string, URL:string) {
    const idAux:string = Math.random.toString();

    const newAlbum: Album = {
      id: 'idAux',
      title: title,
      artist: artist,
      songs: songs,
      URLImage: URL
    }

    this.albums.pipe(take(1)).subscribe(albums =>{
      this._albums.next(albums.concat(newAlbum));
    })

  }
  editAlbum(id:string,title:string, artist: string, songs: string, URL:string) {
    this.albums.pipe(take(1)).subscribe(albums =>{
      const index = albums.findIndex(album => album.id ===id);
      const updatedAlbums = [...albums];
      updatedAlbums[index] = {
        id: id,
        title: title,
        artist: artist,
        songs: songs,
        URLImage: URL
      }
      this._albums.next(updatedAlbums);
    })

  }

  deleteAlbum(id:string) {
    this.albums.pipe(take(1)).subscribe(albums =>{
      const index = albums.findIndex(album => album.id ===id);
      const updatedAlbums = albums.filter(album => album.id !== id);
      this._albums.next(updatedAlbums);
    });
  }

  // updatePlace(placeId: string, title: string, description: string) {

  //   this.albums.pipe(
  //     take(1),
  //     tap(albums => {
  //       const updatedPlaceIndex = albums.findIndex(pl => pl.id === placeId);
  //       const updatedPlaces = [...albums];
  //       const oldPlace = updatedPlaces[updatedPlaceIndex];
  //       updatedPlaces[updatedPlaceIndex] = new Album(
  //         oldPlace.id,
  //         title,
  //         description,
  //         oldPlace.imageUrl,
  //         oldPlace.price,
  //         oldPlace.availableFrom,
  //         oldPlace.availableTo,
  //         oldPlace.userId
  //       );
  //       this._places.next(updatedPlaces);
  //     })
  //   );
  // }
}
