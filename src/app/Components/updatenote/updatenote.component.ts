import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NoteService } from 'src/app/Services/noteServices/note.service';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss'],
})
export class UpdatenoteComponent {
  title: any;
  description: any;
  id: any;

  constructor(
    public dialogRef: MatDialogRef<UpdatenoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private note: NoteService
  ) {
    console.log(data);
    this.title = data.title;
    this.description = data.description;
    this.id = data._id;
  }

  onClick() {
    let payload = {
      title: this.title,
      description: this.description,
      id: this.id,
    };
    this.note.updateNoteById(payload).subscribe((response: any) => {
      console.log(response);
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
