import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Album } from '../album';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss']
})
export class EditListComponent implements OnInit {
  @Output() closeEvent = new EventEmitter<boolean>();
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

  constructor() {
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
      image: new FormControl(''),
    });
  }

  get title() { return this.form.get('title'); }
  get artist() { return this.form.get('artist'); }
  get songs() { return this.form.get('songs'); }

  ngOnInit(): void {
    if(this.album){
      this.form.controls['title'].setValue(this.album.title);
      this.form.controls['artist'].setValue(this.album.artist);
      this.form.controls['songs'].setValue(this.album.songs);
      this.form.controls['image'].setValue(this.album.URLImage);
    }
  }
  onSubmit() {
    console.log(this.form.controls);
  }

  onClose() {
    console.log("Closing");
    this.closeEvent.emit(false);
  }

}
