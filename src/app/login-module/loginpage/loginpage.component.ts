import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from 'src/app/storage/storage.service';
import { UserDetails } from 'src/app/Model/LoginModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent {
  loginForm:FormGroup;
  constructor(private _fb:FormBuilder ,private _storage:StorageService,private _router :Router){
    this.loginForm=this._fb.group({
      UserName:['',Validators.required],
      Password:['',Validators.required],
      
    })
  }
  ngOnInit(): void {
    this._storage.barvisibility(false);
  }

  forget(){

  }

  login(val:any){
  if(val.valid){
   const details =new UserDetails();
   details.UserName=val.value.UserName;
   details.Password=val.value.Password;
   this._storage.authlogin(details).subscribe(data=>{
    this._router.navigate(['/DashboardModule/dashboardpage'])
   })
  }
  }
}
