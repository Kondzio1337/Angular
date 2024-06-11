import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PierwszyKomponentComponent } from './pierwszy-komponent/pierwszy-komponent.component';


export const routes: Routes = [
    { path: '', component: PierwszyKomponentComponent}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes),FormsModule],
    exports: [RouterModule]
})
export class AppRoutingModule {}
