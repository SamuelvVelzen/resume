import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class BrowserTitleService {
  constructor(private _title: Title) {}

  setTitle(newTitle: string): void {
    this._title.setTitle(`${newTitle} | Samuël`);
  }
}
