import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/storage/storage.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
constructor(private _storage:StorageService,private _router:Router){}
  ngOnInit(): void {
    this._storage.barvisibility(false)
  }
btnsignup(){
  
}
about(){}
support(){}
login(){
this._router.navigate(['/LoginModule/loginpage']);
}
}
