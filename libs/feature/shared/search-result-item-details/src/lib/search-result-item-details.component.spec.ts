import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultItemDetailsComponent } from './search-result-item-details.component';

describe('SearchResultItemDetailsComponent', () => {
  let component: SearchResultItemDetailsComponent;
  let fixture: ComponentFixture<SearchResultItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResultItemDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
