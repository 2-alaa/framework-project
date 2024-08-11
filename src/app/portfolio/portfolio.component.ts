import { Component } from '@angular/core';
import { EndComponent } from "../end/end.component";
import { StarComponent } from "../star/star.component";
import { Starr2Component } from "../starr2/starr2.component";
interface Iphoto{
  imgsrc:string,
  altAttr:string
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [EndComponent, StarComponent, Starr2Component],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  isHide:boolean=true;
  modelImg:string=''

  photos:Iphoto[]=[
    {imgsrc:"./assets/images/poert1.png",altAttr:"photoPortofoilo"},
    {imgsrc:"./assets/images/port2.png",altAttr:"photoPortofoilo"},
    {imgsrc:"./assets/images/port3.png",altAttr:"photoPortofoilo"},
    {imgsrc:"./assets/images/poert1.png",altAttr:"photoPortofoilo"},
    {imgsrc:"./assets/images/port2.png",altAttr:"photoPortofoilo"},
    {imgsrc:"./assets/images/port3.png",altAttr:"photoPortofoilo"},
  

  ]

  hideModel(eleTarget:EventTarget|null, imgRef:HTMLImageElement):void{
    if (eleTarget==imgRef) return; 
      
     else {
      this.isHide=true;
    }
  
  
  
  
  }

}
