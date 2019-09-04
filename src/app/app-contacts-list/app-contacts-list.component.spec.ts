import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContactsListComponent } from './app-contacts-list.component';

describe('AppContactsListComponent', () => {
  let component: AppContactsListComponent;
  let fixture: ComponentFixture<AppContactsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppContactsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContactsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
