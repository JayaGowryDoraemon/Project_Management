import { Component, ViewChild } from '@angular/core';

import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { MatTableDataSource } from '@angular/material/table';
import { StorageService } from 'src/app/storage/storage.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddprojectComponent } from '../addproject/addproject.component';
import { DialogConfig } from '@angular/cdk/dialog';
import { ProjectDetails } from 'src/app/Model/ProjectModel';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboardpage',
  templateUrl: './dashboardpage.component.html',
  styleUrls: ['./dashboardpage.component.scss']
})
export class DashboardpageComponent {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  cards :any =[]
  
  datasource = new MatTableDataSource()
  displayedColumns = ['ProjectName', 'StartDate', 'FinsishDate', 'Racilists', 'Duration', 'Status', 'action'];
  constructor(private _storage:StorageService, private _dialog:MatDialog ,private _router :Router){}
  ngOnInit() {
    this._storage.barvisibility(true);
    this.getDetails();

   
this.cards = [  { title: 'TOTAL PROJECT', subtitle: 600, content: 'Content 1' , class: 'card1'},

    { title: 'OPEN', subtitle:  100, content: 'Content 2' , class: 'card2'},
  
    { title: 'INPROGRESS', subtitle:  200, content: 'Content 3' , class: 'card3'},
  
    { title: 'CLOSED', subtitle: 300, content: 'Content 4' , class: 'card4'}];

  }


  applyFilter(val:any){

  }
  openCreateProject(){
  const dialog=this._dialog.open(AddprojectComponent);
  dialog.afterClosed().subscribe({
    next:(data)=>{
      
      const details=new ProjectDetails();
      details.Duration=data.duration;
      details.ProjectName=data.projectName;
      let st=data.startDate;
      let ed=data.endDate
      details.StartDate=new Date(Date.UTC((st).getFullYear(), (st).getMonth(), (st).getDate()));
      details.EndDate=new Date(Date.UTC((ed).getFullYear(), (ed).getMonth(), (ed).getDate()));
      details.Raci=data.raci
      details.Status=1;
    //console.log(details)
  this._storage.createProject(details).subscribe({
    next:(data)=>{
      this.getDetails();
    },
    error:(err)=> {
      console.log("bad request")
    },
  })
    }
  })
  }
  taskDetail(val:any){
    console.log(val);
    localStorage.setItem('ProjectDetails',JSON.stringify(val))
    this._router.navigate(['/DashboardModule/projectstage'])
  }
  delet(val:any){
    this._storage.deleteProject(val).subscribe({
      next:(data)=>{
        this.getDetails();
      }
    })
  }
  edit(val:any){
    const dialogConfig =new MatDialogConfig();
    dialogConfig.data = val;
   const dialog = this._dialog.open(AddprojectComponent,dialogConfig)
   dialog.afterClosed().subscribe({
    next:(data)=>{
      console.log(data);
      let details=new ProjectDetails();
      details.Id=data.projectId;
      details.Duration=data.duration;
      details.ProjectName=data.projectName;
      details.StartDate=data.startDate;
      details.EndDate=data.endDate;
      // let st=data.startDate;
      // let ed=data.endDate
      // details.StartDate=new Date(Date.UTC(st.getFullYear(), st.getMonth(), st.getDate()));
      // details.EndDate=new Date(Date.UTC(ed.getFullYear(), ed.getMonth(), ed.getDate()));
      details.Raci=data.raci;
      console.log(details)
      this._storage.updateProject(details).subscribe({
       next:(data)=>{
        this.getDetails();
       }
      })
    }
   })
  }

  //getDetails in the table
  getDetails(){
    this._storage.getProject().subscribe({
      next:(data)=>{
        console.log(data)
        
        this.datasource=new MatTableDataSource(data)
      }
    })
  }


  //chart code

  //after getting details
  // this.pieChartData.datasets = [{
  //   data: [this.countcomplete, this.countnotinitial, this.countincomplete],
  //   backgroundColor: ['#63d5f7','#e2d4fc','#f7b7f4'],
    
  // }];

  // chart code
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'left',
        
      },
      datalabels: {
        formatter: (value:any, ctx:any) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    }
  };


  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: ['Closed', 'Open', 'Inprogress'],
    datasets: [{
      data: [100, 200, 300],
      
      
      
    }]
  };


  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [DatalabelsPlugin];

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }
  public chartColors: any[] = [
    { 
      backgroundColor:["#FF7360", "#6FC8CE", "#FAFFF2", "#FFFCC4", "#B9E8E0"] 
    }];



}
