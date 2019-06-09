import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BackendService } from '../backend.service';
import { FormsModule } from '@angular/forms';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  constructor(private notifierService: NotifierService , private backendService: BackendService, private router: Router, private route: ActivatedRoute) { }

  saveAction;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      let postId = params["id"];
      if(postId){
        this.editExistingPost(postId);
      }else{
        this.createNewPost();
      }
      this.getCategories();
    });
  }

  editExistingPost(postId){
    this.getPost(postId);
    this.saveAction="edit";
  }
  
  createNewPost(){
    this.saveAction="new";
  }


  id;
  title;
  category;
  status;
  content;
  getPost(postId){
    this.backendService.getPost(postId).then(post => {
      let p = post.json();
      this.id=p["id"];
      this.title=p["title"];
      this.category=p["category"];
      this.status=p["status"];
      this.content=p["content"];
    }).catch(()=>{
      this.notifierService.notify("Error", "There was an error getting the post");    
    });;
  }

  categories;
  getCategories(){
    this.backendService.getCategories().then(c=>{
      this.categories=c.json();
    }).catch(()=>{
      this.notifierService.notify("Error", "There was an error getting the categories");    
    });
  }

  statusList=["Pubblished", "Not pubblished"];

  save(){
    this.saveAction == "new" ? this.newPost() : this.editPost();
  }

  editPost(){
    this.backendService.editPost(this.id, this.title, this.category, this.status, this.content).then(()=>{
      this.notifierService.notify("Success", "Saved");    
    }).catch(()=>{
      this.notifierService.notify("Error", "There was an error saving the post");    
    });
  }

  newPost(){
    this.backendService.addPost(this.title, this.category, this.status, this.content).then(()=>{
      this.notifierService.notify("Success", "Saved");    
    }).catch(()=>{
      this.notifierService.notify("Error", "There was an error saving the post");    
    });
  }

  back(){
    this.router.navigate(["/"]);
  }
}
