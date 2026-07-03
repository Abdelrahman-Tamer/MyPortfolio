import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  imports: [],
  templateUrl: './toggle-button.html',
  styleUrl: './toggle-button.css',
})
export class ToggleButton {
  readonly label = input.required<string>();
  readonly active = input(false);
  readonly toggleClick = output<void>();
}
