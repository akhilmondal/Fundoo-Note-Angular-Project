import { Component, EventEmitter, Output } from '@angular/core';
import { NoteService } from 'src/app/Services/noteServices/note.service';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss'],
})
export class CreatenoteComponent {
  submitted = false;
  showDescription: boolean = false;
  title: any;
  description: any;
  @Output() createEvent = new EventEmitter<boolean>();
  constructor(private note: NoteService) {}

  onSubmit() {
    this.submitted = true;
    if (this.submitted) {
      let payload = {
        title: this.title,
        description: this.description,
      };
      this.note.createnote(payload).subscribe((response: any) => {
        console.log('Note created Successfully', response);
        this.title = '';
        this.description = '';
      });
    }
    this.showDescription = !this.showDescription;

    this.createEvent.emit(this.submitted);
  }
}
