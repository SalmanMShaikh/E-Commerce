import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/service/modal/modal.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  openForm() {
    this.router.navigateByUrl('master');
  }


}
