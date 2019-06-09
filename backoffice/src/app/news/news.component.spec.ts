import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { NotifierService } from 'angular-notifier';
import { NotifierModule } from 'angular-notifier';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing.module';
import { EditorComponent } from './../editor/editor.component';
import { NewsComponent } from './news.component';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NotifierModule, HttpModule, AppRoutingModule, FormsModule
      ],
      declarations: [ 
        NewsComponent, EditorComponent
      ],
      providers: [
        NotifierService, 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should render title in a h3 tag', () => {
    const fixture = TestBed.createComponent(NewsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('News');
  });

  it('should render new post button', () => {
    const fixture = TestBed.createComponent(NewsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#buttonNew').textContent).toContain('New');
  });

  it('should render previuos page button', () => {
    const fixture = TestBed.createComponent(NewsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#buttonPrevious').textContent).toContain('Previous');
  });

  it('should render previuos page button as disabled', () => {
    const fixture = TestBed.createComponent(NewsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#buttonPrevious').disabled).toBe(true);
  });

  it('should render previuos page button as not disabled', () => {
    const fixture = TestBed.createComponent(NewsComponent);
    fixture.detectChanges();
    fixture.componentInstance.currentPage=3;
    fixture.componentInstance.disablePreviousPage();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#buttonPrevious').disabled).toBe(false);
  });

  it('should render next page button', () => {
    const fixture = TestBed.createComponent(NewsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#buttonNext').textContent).toContain('Next');
  });

  it('should render next page button as not disabled', () => {
    const fixture = TestBed.createComponent(NewsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#buttonNext').disabled).toBe(false);
  });

  it('should render next page button as disabled', () => {
    const fixture = TestBed.createComponent(NewsComponent);
    fixture.detectChanges();
    fixture.componentInstance.totalPageCount=7;
    fixture.componentInstance.currentPage=7;
    fixture.componentInstance.disableNextPage();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#buttonNext').disabled).toBe(true);
  });

  it('should render table header', () => {
    const fixture = TestBed.createComponent(NewsComponent);
    fixture.detectChanges();
    let th = fixture.nativeElement.querySelectorAll('th');
    expect(th.length).toBe(4);
    expect(th[0].innerHTML).toBe('Title');
    expect(th[1].innerHTML).toBe('Category');
    expect(th[2].innerHTML).toBe('Status');
    expect(th[3].innerHTML).toBe('Edit');

    fixture.componentInstance.news=[
      {
        "title": "Iusto odio dignissimos ducimus qui",
        "category": "Politics",
        "status": "Not pubblished",
        "content": "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut.",
        "id": 4
      },
      {
        "title": "Omnis dolor repellendus",
        "category": "Politics",
        "status": "Not pubblished",
        "content": "Placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut.",
        "id": 5
      },
    ];
    fixture.detectChanges();

    let tableRows = fixture.nativeElement.querySelectorAll('tr');
    expect(tableRows.length).toBe(3);

    let row1 = tableRows[1];
    expect(row1.cells[0].innerHTML).toBe('Iusto odio dignissimos ducimus qui');
    expect(row1.cells[1].innerHTML).toBe('Politics');
    expect(row1.cells[2].innerHTML).toBe('Not pubblished');
  });
});
