import { Component, Input } from '@angular/core';
import { NoteService } from 'src/app/Services/noteServices/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss'],
})
export class TrashComponent {
  hovered: boolean = false;
  activeItem: string | null = null;
  data: any = [];

  constructor(private note: NoteService) {}
  ngOnInit() {
    this.onSubmit();
  }

  showPanel(item: string) {
    this.hovered = true;
    this.activeItem = item;
  }

  hidePanel() {
    this.hovered = false;
    this.activeItem = null;
  }

  onSubmit() {
    this.note.getnote().subscribe((response: any) => {
      console.log(response);
      this.data = response.data;

      console.log(this.data);
      this.data = this.data.filter((item: any) => {
        return item.trash == true;
      });
      //console.log(this.trashData);
    });
  }
}
