import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drugi-komponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drugi-komponent.component.html',
  styleUrl: './drugi-komponent.component.css'
})
export class DrugiKomponentComponent {
  lista: string[] = [];

  ngOnChanges(){
    this.lista.push("ngOnChanges");
    console.log("Wykonal sie ngOnchange");
  }
  ngOnInit(){
    this.lista.push("ngOnInit");
    console.log("Wykonal sie ngOnInit");
  }
  ngDoCheck(){
    this.lista.push("ngDoCheck");
  }
  ngAfterContentInit(){
    this.lista.push("ngAfterContentInit");
  }
  ngAfterContentChecked(){
    this.lista.push("ngAfterContentChecked");
  }
  ngAfterViewInit(){
    this.lista.push("ngAfterViewInit");
  }
  ngAfterViewChecked(){
    this.lista.push("ngAfterViewChecked");
  }
  ngOnDestroy(){
    this.lista.push("ngOnDestroy");
  }
}
