import { Component, Input } from '@angular/core';
import { NoteService } from 'src/app/Services/noteServices/note.service';

@Component({
  selector: 'app-trashpanel',
  templateUrl: './trashpanel.component.html',
  styleUrls: ['./trashpanel.component.scss'],
})
export class TrashpanelComponent {
  @Input() childmessage: any;
  constructor(private note: NoteService) {}

  deleteNote() {
    let payload = {
      id: [this.childmessage._id],
    };
    this.note.deleteNoteById(payload).subscribe((response: any) => {
      console.log(response);
    });
  }
}
