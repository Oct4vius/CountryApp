import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-loading-spinner',
  templateUrl: './loadingSpinner.component.html',
  styleUrls: ['./loadingSpinner.component.scss'],
})
export class LoadingSpinnerComponent {
  @Input()
  public title = 'Buscando...'

}
