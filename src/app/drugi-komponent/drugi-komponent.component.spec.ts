import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugiKomponentComponent } from './drugi-komponent.component';

describe('DrugiKomponentComponent', () => {
  let component: DrugiKomponentComponent;
  let fixture: ComponentFixture<DrugiKomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrugiKomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrugiKomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
