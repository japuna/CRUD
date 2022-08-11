import { Component, Input, OnInit } from '@angular/core';
import { Album, defaultImage } from '../album';
import { faPenToSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { fade } from '../animation';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  animations: [
    fade
  ]
})
export class ItemComponent implements OnInit {
  public defaultImage = defaultImage;
  public faPenSquare= faPenToSquare;
  public faTrashCan = faTrashAlt;
  @Input() album: Album ={
    id: '',
    title: '',
    artist: '',
    songs: '',
    URLImage: ''
  };
  @Input() isOpen: boolean = false;
  @Input() index: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  editItem() {
    console.log("editing...");
    this.isOpen = true;
  }
  deleteItem() {
    console.log("deleting...");
  }

  closeItem(b:boolean) {
    console.log("Closing form...");
    this.isOpen = false;
  }

}
