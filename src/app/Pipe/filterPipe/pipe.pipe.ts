import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class PipePipe implements PipeTransform {
  transform(notes: any[], searchNote: string): any[] {
    if (!notes || !searchNote) {
      return notes;
    }

    const searchTerm = searchNote.toLowerCase().trim();
    return notes.filter((note) => {
      //It rerurns those notes which includes or have the searched alphabates.
      return (
        note.title.toLowerCase().includes(searchTerm) ||
        note.description.toLowerCase().includes(searchTerm)
      );
    });
  }
}
