import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UserDetails } from '../Model/LoginModel';
import { ProjectDetails } from '../Model/ProjectModel';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  url:string='https://localhost:7049/api/';


  constructor(private _httpClient:HttpClient) { }
//login EndPoint
authlogin(authuser:UserDetails) : Observable<any>
{
  return this._httpClient.post(this.url + 'UserDetail/Authentication/authenication',authuser)
}
createAccount(details:UserDetails): Observable<any>
{
  return this._httpClient.post(this.url+'UserDetail/CreateUserDetails',details)
}

//Project details end point
createProject(details:ProjectDetails):Observable<any>
{
  return this._httpClient.post(this.url+'ProjectDetails/CreateProject',details)
}
getProject():Observable<any>{
  return this._httpClient.get(this.url+'ProjectDetails/GetProject')
}
deleteProject(details:number):Observable<any>
{
  return this._httpClient.delete(this.url+`ProjectDetails/DeleteProjectDetails/delete?projectId=${details}`)
}
updateProject(details:ProjectDetails):Observable<any>
{
  return this._httpClient.put(this.url+'ProjectDetails/UpdateProjectDetails',details)
}

//service datasource
serviceDataSource:any;


// for hiding toolbar 
toolbar_emit=new Subject<boolean>();
barvisibility(bar:boolean){
  this.toolbar_emit.next(bar)
}

}
