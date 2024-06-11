import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugiKomponentComponent } from '../drugi-komponent/drugi-komponent.component';

@Component({
  selector: 'app-pierwszy-komponent',
  standalone: true,
  imports: [CommonModule, DrugiKomponentComponent],
  templateUrl: './pierwszy-komponent.component.html',
  styleUrl: './pierwszy-komponent.component.css'
})
 
 

export class PierwszyKomponentComponent {

  tablica: string[] = []; 

  dodajDoTablicy(inputValue: string){
    this.tablica.push(inputValue);
    console.log("Input =" + this.tablica);
  }
}
