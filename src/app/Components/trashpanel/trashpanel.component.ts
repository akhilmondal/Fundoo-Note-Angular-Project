import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NoteService } from 'src/app/Services/noteServices/note.service';

@Component({
  selector: 'app-trashpanel',
  templateUrl: './trashpanel.component.html',
  styleUrls: ['./trashpanel.component.scss'],
})
export class TrashpanelComponent {
  @Input() childmessage: any;
  @Output() sendEvent = new EventEmitter<string>();
  constructor(private note: NoteService) {}

  deleteNote() {
    let payload = {
      id: [this.childmessage._id],
    };
    this.note.deleteNoteById(payload).subscribe((response: any) => {
      console.log(response);
      this.sendEvent.emit(response);
    });
  }
  unArchiveNote() {
    let payload = {
      id: [this.childmessage._id],
    };
    this.note.archiveNoteById(payload).subscribe((response: any) => {
      console.log(response);
      this.sendEvent.emit(response);
    });
  }
}
