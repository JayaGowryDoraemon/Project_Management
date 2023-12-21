import { Component } from '@angular/core';
import { StorageService } from './storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project_management';
  showbar:boolean=false;
  constructor(private _storage:StorageService){}
  
  ngOnInit(){
    this._storage.toolbar_emit.subscribe((val)=>{
      this.showbar=val
    })
  }
}
