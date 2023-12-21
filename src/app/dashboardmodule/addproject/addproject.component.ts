import { formatDate } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProjectDetails } from 'src/app/Model/ProjectModel';
import { StorageService } from 'src/app/storage/storage.service';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.scss']
})
export class AddprojectComponent {
  addproject:FormGroup;
  
dropdownList:any= ["Responsible","Accountable","Consulted","Informed"];
 
  constructor(private _fb :FormBuilder,private _storage : StorageService, @Inject(MAT_DIALOG_DATA) public data:any,private _dialogref:MatDialogRef<AddprojectComponent>,){
console.log(data)
    if(data){
      this.addproject=this._fb.group({
        projectName:data.projectName,
        startDate:data.startDate,
        endDate:data.endDate,
        raci:data.raci,
        duration:data.duration,
        projectId:data.projectId
      })
      //this.addproject.get('raci')?.patchValue(value.raci);
      //this.addproject.get('endDate')?.setValue(new Date(value.endDate).toISOString().split('T')[0]);
    }
    else{
      this.addproject=this._fb.group({
        projectName:['',Validators.required],
        startDate:'',
        endDate:'',
        raci:'',
      Status:'',
      duration:'',
      })
    }

  }


  cals(){
    console.log("date 1",this.addproject.get('startDate')?.value)
    console.log("date 2",this.addproject.get('endDate')?.value)
    const DATES1= new Date(this.addproject.get('startDate')?.value)
    // console.log(this.addproject.get('startDate')?.value)
    const DATES2=new Date(this.addproject.get('endDate')?.value)
    const TIME_DIFFERENCE= DATES2.getTime()- DATES1.getTime();
    const TIME=TIME_DIFFERENCE/(1000*3600*24);
    console.log(" DAYS :", TIME);
    this.addproject.get('duration')?.patchValue(TIME)
  }
  createProject(val:any){
//    const details=new ProjectDetails();
//   // details.Duration=val.value.Duration;
//   // details.ProjectName=val.value.projectName;
//   // details.StartDate=val.value.startDate;
//   // details.EndDate=val.value.endDate;
//   // details.Raci=val.value.raci
//   // details.Status=1;
//  // console.log(details)
//   this._storage.createProject(details).subscribe({
//     next:(data)=>{
//       console.log("created");
//     },
//     error:(err)=> {
//       console.log("bad request")
//     },
//   })
  }
  updateProject(val:any){
    // console.log("hell update asdd")
    // this.cals();
  //  let details=new ProjectDetails();
  //  details.Duration=val.value.Duration;
  //  details.ProjectName=val.value.projectName;
  //  details.StartDate=val.value.startDate;
  //  details.EndDate=val.value.endDate;
  //  details.Raci=val.value.raci;
  //  this._storage.updateProject(details).subscribe({
  //   next:(data)=>{
  //     this._storage.getProject().subscribe()
  //   }
  //  })
  }
}

