import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private searchInputSource = new BehaviorSubject<string>('');
  currentSearchInput = this.searchInputSource.asObservable();

  updateSearchInput(input: string) {
    this.searchInputSource.next(input);
  }
}
