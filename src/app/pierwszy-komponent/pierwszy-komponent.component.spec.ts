import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PierwszyKomponentComponent } from './pierwszy-komponent.component';

describe('PierwszyKomponentComponent', () => {
  let component: PierwszyKomponentComponent;
  let fixture: ComponentFixture<PierwszyKomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PierwszyKomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PierwszyKomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
