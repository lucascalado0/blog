import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card',
  imports: [RouterLink],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  @Input()
  imageCover: string = "";

  @Input()
  cardTitle: string = "";

  @Input()
  cardDescription: string = "";

  @Input()
  cardLink: string = " ";

  @Input()
  Id: string = "0"

}
