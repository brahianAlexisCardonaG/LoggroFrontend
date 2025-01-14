import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImagesUrl } from '../constants/images.constant';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(
    private http: HttpClient,
  ) { }

  public get(data: any) {
    return this.http.get<any>(ImagesUrl.URL_GET_IMAGES, {params:data});
  }

  public save(data: any) {
    return this.http
      .post<any>(ImagesUrl.URL_SAVE_IMAGES, data);
  }

  public delete(id: any) {
    return this.http.delete(ImagesUrl.URL_DELETE_IMAGES + `/${id}`)
  }

}
