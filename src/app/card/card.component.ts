import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input('firstName') firstName: string;
  @Input('lastName') lastName: string;
  @Input('age') age: string;
}
