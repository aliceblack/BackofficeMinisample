import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  host;

  constructor(private http: Http) { 
    this.setHost();
  }

  setHost(){
    this.host = environment.host;
  }

  get(url){
      const headers = new Headers();
      const options = new RequestOptions({ headers: headers });
      return this.http.get(url, options)
      .toPromise()
  }

  post(url, payload){
      const headers = new Headers();
      const options = new RequestOptions({ headers: headers });
      return this.http.post(url, payload, options)
      .toPromise()
  }

  patch(url, payload){
    const headers = new Headers();
    const options = new RequestOptions({ headers: headers });
    return this.http.patch(url, payload, options)
    .toPromise()
  }

  getNews(){
    let url = this.host+'/posts';
    return this.get(url);
  }

  /*getNewsPage(pageNumber, pageSize){
    let url = this.host+'/posts/?_page='+pageNumber+'&_limit='+pageSize;
    return this.get(url);
  }*/

  getPost(postId){
    let url = this.host+'/posts/'+postId;
    return this.get(url);
  }

  getCategories(){
    let url = this.host+'/categories';
    return this.get(url);
  }

  addPost(title, category, status, content){
    let url = this.host+'/posts';
    let payload = {title: title, category:category, status:status, content:content}
    return this.post(url, payload);
  }

  editPost(id, title, category, status, content){
    let url = this.host+'/posts/'+id;
    let payload = {title: title, category:category, status:status, content:content}
    return this.patch(url, payload);
  }
}
