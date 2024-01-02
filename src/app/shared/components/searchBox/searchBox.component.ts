import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './searchBox.component.html',
  styles: ``,
})
export class SearchBoxComponent {

  @ViewChild('searchBox')
  public searchBoxInput!: ElementRef<HTMLInputElement>;

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter()

  @Input()
  public placeholder: string = ''

  public sendValue(){
    this.onValue.emit(this.searchBoxInput.nativeElement.value)
    this.searchBoxInput.nativeElement.value = ''
  }

}
