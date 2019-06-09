import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NotifierModule } from 'angular-notifier';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './../app-routing.module';
import { NewsComponent } from './../news/news.component';

import { EditorComponent } from './editor.component';

describe('EditorComponent', () => {
  let component: EditorComponent;
  let fixture: ComponentFixture<EditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, NotifierModule, HttpModule, AppRoutingModule],
      declarations: [ EditorComponent, NewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h3 tag', () => {
    const fixture = TestBed.createComponent(EditorComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Post');
  });

  it('should render back button', () => {
    const fixture = TestBed.createComponent(EditorComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#buttonBack').textContent).toContain('Back');
  });

  it('should render save button', () => {
    const fixture = TestBed.createComponent(EditorComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#buttonSave').textContent).toContain('Save');
  });

  it('should render title input', () => {
    const fixture = TestBed.createComponent(EditorComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#titleInput').textContent).toBe('');
  });

 

  it('should render category selection', () => {
    const fixture = TestBed.createComponent(EditorComponent);
    fixture.detectChanges();
    fixture.componentInstance.categories=[{"name":"tech"}];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#categorySelection').textContent).toContain('tech');
  });

  it('should render status selection', () => {
    const fixture = TestBed.createComponent(EditorComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#statusSelection').textContent).toContain('Pubblished');
  });



  it('should render content text area input', () => {
    const fixture = TestBed.createComponent(EditorComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#contentTextArea').textContent).toBe('');
  });



});
