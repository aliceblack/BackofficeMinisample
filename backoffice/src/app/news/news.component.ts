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
    this.getInitialPosts();
  }

  news;
  previosIsDisabled=true;
  nextIsDisabled=false;

  currentPage=1;
  pageSize=5;
  getInitialPosts(){
    let pageNumber=1;
    let pageSize = this.pageSize;
    this.getPosts(pageNumber,pageSize);
  }
  
  totalPageCount;
  getPosts(pageNumber, pageSize){
    this.backendService.getNewsPage(pageNumber, pageSize).then(news => {
      let count = news.headers.get("x-total-count");
      this.totalPageCount=Math.ceil(Number(count)/pageSize);
      this.news=news.body;
      this.disableNextPage();
      this.disablePreviousPage();
    }).catch(()=>{
      this.notifierService.notify("Error", "Error getting the news");    
    });
  }

  disableNextPage(){
    this.currentPage == this.totalPageCount ? this.nextIsDisabled=true : this.nextIsDisabled=false;
  }

  disablePreviousPage(){
    this.currentPage == 1 ? this.previosIsDisabled=true : this.previosIsDisabled=false;
  }

  loadPreviousPosts(){
    if(this.currentPage > 1){
      this.currentPage=this.currentPage-1;
      this.getPosts(this.currentPage, this.pageSize)
    }
  }

  loadNextPosts(){
    if(this.currentPage < this.totalPageCount) {
      this.currentPage=this.currentPage+1;
      this.getPosts(this.currentPage, this.pageSize)
    }
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
