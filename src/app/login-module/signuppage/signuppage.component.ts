import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/Model/LoginModel';
import { StorageService } from 'src/app/storage/storage.service';

interface Role {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.scss']
})
export class SignuppageComponent {
  signupform: any;
  constructor(private _fb:FormBuilder,private _router:Router,private _storage:StorageService){
  this.signupform=this._fb.group({
    Name:['',Validators.required],
    UserName:['',Validators.required],
    Email:['',Validators.required],
    PassWord:['',Validators.required],
    PhoneNumber:['',Validators.required],
    Role:['',Validators.required],
    ConfirmPassword:['',Validators.required],
  })
  }
  rolelist: Role[] = [
   
    {value: 1, viewValue: 'Admin'},
    {value: 2, viewValue: 'Manager'},
    {value: 3, viewValue: 'Team Leader'},
    {value: 4, viewValue: 'Developer'},
    {value: 5, viewValue: 'Trainee'},
    
  ];
  register(val:any){
    if(val.valid){
      if(val.value.PassWord==val.value.ConfirmPassword){
        const details=new UserDetails();
        details.Email=val.value.Email;
        details.Name=val.value.Name;
        details.Password=val.value.PassWord;
        details.PhoneNumber=val.value.PhoneNumber;
        details.Role=val.value.Role;
        details.UserName=val.value.UserName;
        console.log(details)
        this._storage.createAccount(details).subscribe({
          next:(data)=>{
            alert("successfully created")
            this._router.navigate(['/LoginModule/loginpage'])
          },
          error:(err)=>{
            alert("the username is already exit")
          }
        })
      }
      else{
        alert("Password doesn't Match")
      }
    }
  }
}
