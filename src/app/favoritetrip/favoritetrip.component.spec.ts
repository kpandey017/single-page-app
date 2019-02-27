import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritetripComponent } from './favoritetrip.component';

describe('FavoritetripComponent', () => {
  let component: FavoritetripComponent;
  let fixture: ComponentFixture<FavoritetripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritetripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritetripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
