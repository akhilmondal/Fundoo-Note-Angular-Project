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
  colorArray = [
    { code: '#ffffff', name: 'white' },
    { code: '#FF6347', name: 'red' },
    { code: '#FF4500', name: 'orange' },
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ADFF2F', name: 'green' },
    { code: '#43C6DB', name: 'teal' },
    { code: '#728FCE', name: 'Blue' },
    { code: '#2B65EC', name: 'darkblue' },
    { code: '#D16587', name: 'purple' },
    { code: '#F9A7B0', name: 'pink' },
    { code: '#E2A76F', name: 'brown' },
    { code: '#D3D3D3', name: 'grey' },
  ];

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

  changeColor(colorName: any) {
    // let data = {
    //   noteId: [this.noteobj.id],
    //   color: color,
    // };
    // console.log(this.noteobj);
    // this.note.ChangeColor(data).subscribe((response: any) => {
    //   console.log('Note color changed', response);
    //   this.iconstodisplay.emit(response);
    // });
  }
}
