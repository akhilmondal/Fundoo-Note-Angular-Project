import { Component } from '@angular/core';
import { NoteService } from 'src/app/Services/noteServices/note.service';

@Component({
  selector: 'app-getallnote',
  templateUrl: './getallnote.component.html',
  styleUrls: ['./getallnote.component.scss']
})
export class GetallnoteComponent {
  submitted = false

  constructor(
    private note: NoteService
  ) {}


  onSubmit() {
    this.submitted = true
    if (this.submitted) {
      this.note.getnote().subscribe((response: any) => {
        console.log('Note fetched Successfully', response);
      });
    }
  }

}
