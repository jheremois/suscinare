import { Component, OnInit } from '@angular/core';
import { UserService } from "@services/user.service";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(private _user: UserService ) { 
    
  }


  mojo = "aaaa"
  pei
  
  color: '#0a81ab';

  ngOnInit(): void {

  }

}
