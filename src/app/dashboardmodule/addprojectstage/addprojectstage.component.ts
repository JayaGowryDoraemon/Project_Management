import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addprojectstage',
  templateUrl: './addprojectstage.component.html',
  styleUrls: ['./addprojectstage.component.scss']
})
export class AddprojectstageComponent {
  projectPlanForm:FormGroup;
  constructor(private _fb:FormBuilder){
    this.projectPlanForm=this._fb.group({
      projectName:'',
      StartDate:'',
      FinishDate:''
    })
  
  }
  calculatePlan(){

  }
  savePlan(val:any){

  }


}
