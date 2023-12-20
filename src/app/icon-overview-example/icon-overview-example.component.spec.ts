import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconOverviewExample } from './icon-overview-example.component';

describe('IconOverviewExampleComponent', () => {
  let component: IconOverviewExample;
  let fixture: ComponentFixture<IconOverviewExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconOverviewExample]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconOverviewExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
