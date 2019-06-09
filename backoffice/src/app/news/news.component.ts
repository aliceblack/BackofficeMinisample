import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Router, NavigationExtras } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private notifierService: NotifierService, private backendService: BackendService, private router: Router) { }

  ngOnInit() {
    this.getNews();
  }

  news;

  getNews(){
    this.backendService.getNews().then(news => {
      this.news=news.json();
    }).catch(()=>{
      this.notifierService.notify("Error", "Error getting the news");    
    });
  }


  edit(event, post){
    const navigationExtras: NavigationExtras = { 
      queryParams: {
        "id": post.id
      }
    };
    this.router.navigate(['/edit'], navigationExtras);
  }

  newPost(){
    this.router.navigate(['/edit']);
  }
}
