import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { __values } from 'tslib';
import { Album } from '../album';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss']
})
export class EditListComponent implements OnInit {
  public isSubmit = false;
  public form: FormGroup = new FormGroup({});
  public faTrashCan = faXmark;
  @Input() album: Album ={
    id: '',
    title: '',
    artist: '',
    songs: '',
    URLImage: ''
  };
  @Input() isEdit: boolean = true;
  @Output() closeEvent = new EventEmitter<boolean>();

  constructor(private albumService:AlbumsService) {
    this.form = new FormGroup({
      title: new FormControl('',{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      artist: new FormControl('',{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      songs: new FormControl('',{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      image: new FormControl('',{
      validators: [Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]
      })
    });
  }

  get title() { return this.form.get('title'); }
  get artist() { return this.form.get('artist'); }
  get songs() { return this.form.get('songs'); }
  get image() { return this.form.get('image'); }

  ngOnInit(): void {
    if(this.album){
      this.form.controls['title'].setValue(this.album.title);
      this.form.controls['artist'].setValue(this.album.artist);
      this.form.controls['songs'].setValue(this.album.songs);
      this.form.controls['image'].setValue(this.album.URLImage);
    }
  }
  onSubmit() {
    if(!this.form.valid || this.form.untouched) {
      return;
    }
    if(!this.isEdit){
      this.submitNew();
    }
    if(this.isEdit && this.album.id) {
      this.submitEdit();
    }
    this.isSubmit = true;
    setTimeout(()=>{
      this.closeEvent.emit(false);
      this.isSubmit = false;
    },2000)
  }
  submitNew() {
    console.log("new");
    this.albumService.addAlbum(
    this.title!.value,
    this.artist!.value,
    this.songs!.value,
    this.image!.value
    )

  }

  submitEdit() {
    console.log("load");
    this.albumService.editAlbum(this.album.id, this.title!.value, this.artist!.value, this.songs!.value, this.image!.value);
  }

  onClose() {
    console.log("Closing");
    this.closeEvent.emit(false);
  }

}
