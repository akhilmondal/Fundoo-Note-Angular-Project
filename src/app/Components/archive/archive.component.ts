import { Component } from '@angular/core';
import { NoteService } from 'src/app/Services/noteServices/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent {
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

      this.data = this.data.filter((item: any) => {
        return item.archive == true;
      });
      //console.log(this.trashData);
    });
  }

}
