import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NoteService } from 'src/app/Services/noteServices/note.service';

@Component({
  selector: 'app-notepanel',
  templateUrl: './notepanel.component.html',
  styleUrls: ['./notepanel.component.scss'],
})
export class NotepanelComponent {
  options: boolean = false;
  @Input() childMessage: any;
  @Output() refreshEvent = new EventEmitter<string>();

  constructor(private note: NoteService) {}

  showOptions() {
    this.options = true;
  }
  ngOnInit() {}
  trashNote() {
    let payload = {
      id: [this.childMessage._id],
    };
    this.note.trashNoteById(payload).subscribe((response: any) => {
      console.log(response);
      this.refreshEvent.emit(response);
    });
  }

  archiveNote() {
    let payload = {
      id: [this.childMessage._id],
    };
    this.note.archiveNoteById(payload).subscribe((response: any) => {
      console.log(response);
      this.refreshEvent.emit(response);
    });
  }
}
