import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Album } from '../album';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public albums: Album[] = [];
  private albumSub: Subscription | undefined

  constructor(private albumsServices: AlbumsService) { }

  ngOnInit(): void {
    this.albumSub = this.albumsServices.albums.subscribe(
      albums => {
        this.albums= albums;
      }
    )
  }
  ngOnDestroy(): void {
    if(this.albumSub) {
      this.albumSub.unsubscribe();
    }
  }

}
