import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  host;

  constructor(private http: HttpClient) { 
    this.setHost();
  }

  setHost(){
    this.host = environment.host;
  }

  get(url){
    return this.http.get(url,{ observe: 'response' }).pipe(tap(res => {
    })).toPromise();  
  }

  post(url, payload){
      return this.http.post(url, payload).pipe(tap(res => {
      })).toPromise();  
  }

  patch(url, payload){
    return this.http.patch(url, payload).pipe(tap(res => {
    })).toPromise();  
  }

  getNews(){
    let url = this.host+'/posts';
    return this.get(url);
  }

  getNewsPage(pageNumber, pageSize){
    let url = this.host+'/posts/?_page='+pageNumber+'&_limit='+pageSize;
    return this.get(url);
  }

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
