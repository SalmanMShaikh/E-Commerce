import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/service/modal/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  isOpen = false;

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    this.modalService.isOpenSubject.subscribe(isOpen => {
      this.isOpen = isOpen;
      console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<', this.isOpen)
    });
  }

}
