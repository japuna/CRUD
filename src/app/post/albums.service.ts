import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { take, map, tap, catchError } from 'rxjs/operators';
import { Album } from './album';


@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private apiURL = "http://localhost:3000/albums";

  private headers = new Headers({ 'content-type': 'application/json' })
  private _albums = new BehaviorSubject<Album[]>([]);
  private albumsList: Album[] = [];


  constructor(private httpClient: HttpClient) { }


  get albums():Observable<Album[]> {
    return this._albums.asObservable();
  }

  set albumsData(data:Album[]){
    this._albums.next(data);
  }

  getAll() {
    this.httpClient.get<Album[]>(this.apiURL).subscribe(albums => {
      this.albumsData = albums;
      this.albums.subscribe(albums => {
        this.albumsList = albums;
      })
    })
  };


  addAlbum (title:string, artist: string, songs: string, URL:string) {
    const idAux:string = (10000 * Math.random()).toString();
    console.log(idAux);

    const newAlbum: Album = {
      id: idAux,
      title: title,
      artist: artist,
      songs: songs,
      URLImage: URL
    }
    this.albums.subscribe(albums => this.albumsList = albums);
    this.albumsList.push(newAlbum);
    this.albumsData = this.albumsList;


    var requestOptions = {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(newAlbum),
    };

    fetch(this.apiURL, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      return this.httpClient.post<any>(this.apiURL, newAlbum).pipe(
        map((res:any)=> {
          return res;
        })
      )
  }

  deleteAlbum(id:string) {

    var requestOptions = {
      method: 'DELETE',
      headers: this.headers,
    };

    fetch(this.apiURL + '/' +id, requestOptions)
      .then(response => response.text())
      .then(result => {
        this.albums.subscribe(albums =>{
          this.albumsList = albums.filter(album => album.id !== id);
        })
        this.albumsData = this.albumsList;
      })
      .catch(error => console.log('error', error));
  }
  editAlbum(id:string, title:string, artist: string, songs: string, URL:string) {

    const album: Album = {
      id: id,
      title: title,
      artist:artist,
      songs: songs,
      URLImage: URL
    }

    const index = this.albumsList.map(x => x.id).indexOf(id);
    this.albumsList[index] = album;
    this.albumsData = this.albumsList;

    var requestOptions = {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify(album)
    };
    fetch(this.apiURL + '/' +id, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
}
