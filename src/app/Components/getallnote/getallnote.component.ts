import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NoteService } from 'src/app/Services/noteServices/note.service';

@Component({
  selector: 'app-getallnote',
  templateUrl: './getallnote.component.html',
  styleUrls: ['./getallnote.component.scss'],
})
export class GetallnoteComponent {
  data: any = [];
  

  constructor(private note: NoteService) {}
  ngOnInit() {
    this.onSubmit();
  }

  onSubmit() {
    this.note.getnote().subscribe((response: any) => {
      console.log(response);
      this.data = response.data;

      console.log(this.data);
      this.data = this.data.filter((item:any) => {
        return item.trash == false;
      })
      //console.log(this.trashData);
    });
  }
}
