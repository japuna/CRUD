import { Component, Input, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Album } from '../album';
import { fade } from '../animation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    fade
  ]
})
export class HeaderComponent implements OnInit {
  public faPlusCircle = faPlusCircle;
  public isOpen: boolean = false;
  @Input() album: Album ={
    id: '',
    title: '',
    artist: '',
    songs: '',
    URLImage: ''
  };
  constructor() { }

  ngOnInit(): void {
  }

  addItem() {
    this.isOpen = true;
    console.log("adding");
  }

  closeItem(event: boolean) {
    this.isOpen = false;
  }

}
