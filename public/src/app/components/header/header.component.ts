import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/service/modal/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private modalService: ModalService) {

  }

  ngOnInit(): void {
  }
  openModal() {

    this.modalService.openModal();
    console.log('Hello,"""""""""""""""')
  }

}
