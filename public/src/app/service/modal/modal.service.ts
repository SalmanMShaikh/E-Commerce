import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  isOpenSubject = new Subject<boolean>();
  isOpen = this.isOpenSubject.asObservable();

  openModal(): void {
    this.isOpenSubject.next(true);
  }

  closeModal(): void {
    this.isOpenSubject.next(false);
  }
}
