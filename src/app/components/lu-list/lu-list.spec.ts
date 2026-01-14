import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuList } from './lu-list';

describe('LuList', () => {
  let component: LuList;
  let fixture: ComponentFixture<LuList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
