import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'storybook-button',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <button
    type="button"
    [ngClass]="classes"
    [ngStyle]="{ 'background-color': backgroundColor() }"
  >
    {{ label }}
  </button>`,
  styleUrls: ['./button.css'],
})
export class ButtonComponent {
  /**
   * Is this the principal call to action on the page?
   */
  primary = input(false);

  /**
   * What background color to use
   */
  backgroundColor = input<string>();

  /**
   * How large should the button be?
   */
  size = input<'small' | 'medium' | 'large'>('medium');

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Test'

  public get classes(): string[] {
    const mode = this.primary()
      ? 'storybook-button--primary'
      : 'storybook-button--secondary';

    return ['storybook-button', `storybook-button--${this.size()}`, mode];
  }
}
