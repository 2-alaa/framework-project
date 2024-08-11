import { Component } from '@angular/core';
import { EndComponent } from "../end/end.component";
import { StarComponent } from "../star/star.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [EndComponent, StarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
