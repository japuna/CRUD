import { getLocaleDateFormat } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Album } from '../album';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {
  public albums$:Observable<Album[]> | undefined;
  private albumSub: Subscription | undefined;


  constructor(private albumsServices: AlbumsService) {
    this.albums$ =albumsServices.albums;
  }

  ngOnInit(): void {
      this.getAllData();
  }

  ngOnDestroy(): void {
    if(this.albumSub) {
      this.albumSub.unsubscribe();
    }
  }

  getAllData(){
    this.albumsServices.getAll();
    console.log(this.albums$);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes", changes);

  }

}
