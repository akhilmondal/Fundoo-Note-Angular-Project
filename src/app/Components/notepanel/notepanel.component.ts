import { Component, Input } from '@angular/core';
import { NoteService } from 'src/app/Services/noteServices/note.service';

@Component({
  selector: 'app-notepanel',
  templateUrl: './notepanel.component.html',
  styleUrls: ['./notepanel.component.scss'],
})
export class NotepanelComponent {
  options: boolean = false;
  @Input() childMessage: any;
  constructor(private note: NoteService) {}

  showOptions() {
    this.options = true;
  }
  ngOnInit(){
  
  }
  trashNote() {
    let payload={
      id: [this.childMessage._id]
    }
    this.note.trashNoteById(payload).subscribe((response: any) => {
      console.log(response);
    });
  }
}
