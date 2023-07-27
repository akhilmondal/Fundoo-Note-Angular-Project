import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss'],
})
export class DisplaynotesComponent {
  @Input() notes: any = [];
  hovered: boolean = false;
  activeItem: string | null = null;
  trashMessage!: string;
  archiveMessage!: string;
  @Output() EventDisplay = new EventEmitter<string>();
  @Output() archiveEventDisplay = new EventEmitter<string>();
  @Output() updateEventDisplay = new EventEmitter<string>();


  constructor(private dialog: MatDialog) {}

  showPanel(item: string) {
    this.hovered = true;
    this.activeItem = item;
  }

  hidePanel() {
    this.hovered = false;
    this.activeItem = null;
  }

  openDialog(note: any): void {
    const dialogRef = this.dialog.open(UpdatenoteComponent, {
      width: '550px',
      data: note,
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      this.EventDisplay.emit(result)

    });
  }
  receiveRefreshMessage($event: any) {
    this.trashMessage = $event;
    console.log(this.trashMessage);
    this.EventDisplay.emit(this.trashMessage);
  }
}
