import { Component } from '@angular/core';
import { EndComponent } from "../end/end.component";
import { Iproduct } from '../iproduct';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [EndComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  products:Iproduct[]=[
    {imgSrc:"./assets/images/cat-01.jpg",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"./assets/images/cat-02.jpg",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"./assets/images/cat-03.jpg",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"./assets/images/cat-04.jpg",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"./assets/images/cat-05.jpg",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"./assets/images/cat-06.jpg",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"./assets/images/cat-06.jpg",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"./assets/images/cat-07.jpg",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
   
    {imgSrc:"./assets/images/avatar-01.png",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"./assets/images/avatar-02.png",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"./assets/images/avatar-03.png",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"./assets/images/avatar-04.png",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"./assets/images/avatar-05.png",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"./assets/images/avatar-06.png",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"./assets/images/team-01.jpg",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"./assets/images/team-02.jpg",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"./assets/images/team-03.jpg",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"./assets/images/team-04.jpg",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"./assets/images/team-05.png",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"./assets/images/team-06.png",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"./assets/images/team-07.jpg",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"./assets/images/team-08.jpg",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"./assets/images/features-01.jpg",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"./assets/images/features-02.jpg",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"./assets/images/features-03.jpg",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"./assets/images/gallery-01.png",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"./assets/images/gallery-02.png",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"./assets/images/gallery-03.jpg",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"./assets/images/gallery-04.png",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"../../assets/images/gallery-05.jpg",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"./assets/images/gallery-06.png",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"./assets/images/work-steps-1.png",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"./assets/images/work-steps-1.png",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"./assets/images/work-steps-1.png",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"./assets/images/work-steps-2.png",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"./assets/images/work-steps-3.png",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"./assets/images/discount.png",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"./assets/images/work-steps.png",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"./assets/images/events.png",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"./assets/images/skills.png",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
    {imgSrc:"./assets/images/cat-08.jpg",altAttr:"photoimg",price:50.99,descript:"Lorem ipsum dolor sit amet consectetur"},
  ]

}
