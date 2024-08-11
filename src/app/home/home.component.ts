import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { EndComponent } from "../end/end.component";
import { StarComponent } from "../star/star.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, EndComponent, StarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
