import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  
  constructor(private authStatus:AuthService) { 
    if (AuthService) {
      
    }
  }

  ngOnInit() {
  }

}
