import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient,
  ) { }

  public get(url: string, status: any) {
    return this.http.get<any>(url, {params:status});
  }

  public save(url: string, data: any) {
    return this.http
      .post<any>(url, data);
  }

  public delete(url:string ,id: any) {
    return this.http.delete(url + `/${id}`)
  }

  public update(url: string, data: any) {
    return this.http
      .put<any>(url, data);
  }

  public filterNombre(url: string,nombre:string){
    return this.http.get(url + `/${nombre}`)
  }

  public updateStatus(url: string, data:any) {
    return this.http.put<any>(url, data);
  }

}
