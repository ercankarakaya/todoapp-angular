import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todoapp';
  user = 'Ricardo';
  items= [
    { description: 'Breakfast', action: 'No' },
    { description: 'Spor', action: 'No' },
    { description: 'Home Work', action: 'No' },
    { description: 'Cinema', action: 'No' }
  ];
}
