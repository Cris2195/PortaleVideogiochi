import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }
  


  private sectionSelected: Subject<string> = new Subject<string>();

  public sectionSelected$ = this.sectionSelected.asObservable();

  public setSelection(id: string) {
    this.sectionSelected.next(id);
  }

}
