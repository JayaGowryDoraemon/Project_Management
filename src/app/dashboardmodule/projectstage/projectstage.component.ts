import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StorageService } from 'src/app/storage/storage.service';
import { AddprojectstageComponent } from '../addprojectstage/addprojectstage.component';

@Component({
  selector: 'app-projectstage',
  templateUrl: './projectstage.component.html',
  styleUrls: ['./projectstage.component.scss']
})
export class ProjectstageComponent {
 
 projectDetailsValue:any;
  projectplandatasource:any;
  cols1=['ProjectPlan','StartDate','FinishedDate','Duration','Status','Action']
  constructor(private _storage:StorageService, private _dialog :MatDialog){
    
  }
  ngOnInit(){
    this._storage.barvisibility(true);
    this.projectDetailsValue = JSON.parse(localStorage.getItem("ProjectDetails")!)
     }

  addprojectstagws(val:any){
  const dialog=this._dialog.open(AddprojectstageComponent);
  dialog.afterClosed().subscribe({
    next:(data)=>
    console.log(data)
  }
  )

  }
  openDevelopment(val:any){

  }
editPlan(val:any)
{

}
}
