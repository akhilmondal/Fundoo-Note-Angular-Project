import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss'],
})
export class DisplaynotesComponent {
  @Input() notes: any = [];
  hovered: boolean = false;
  activeItem: string | null = null;

  showPanel(item: string) {
    this.hovered = true;
    this.activeItem = item;

  }

  hidePanel() {
    this.hovered = false;
    this.activeItem = null;
  }
}
