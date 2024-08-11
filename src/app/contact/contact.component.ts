import { Component } from '@angular/core';
import { Starr2Component } from "../starr2/starr2.component";
import { EndComponent } from "../end/end.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [Starr2Component, EndComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
