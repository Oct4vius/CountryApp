import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, debounceTime, debounce, Subscription } from 'rxjs';


@Component({
  selector: 'shared-search-box',
  templateUrl: './searchBox.component.html',
  styles: ``,
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject<string>()
  private debounceSubscription?: Subscription;

  // @ViewChild('searchBox')
  // public searchBoxInput!: ElementRef<HTMLInputElement>;

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter()

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter()

  @Input()
  public initialValue: string = ''

  @Input()
  public placeholder: string = ''

  onKeyPress( searchTerm: string ){
    this.debouncer.next( searchTerm );
  }

  ngOnDestroy(): void {
    this.debounceSubscription?.unsubscribe();
  }


  ngOnInit(): void {
    this.debounceSubscription = this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe( value => {
      this.onDebounce.emit( value )
    })
  }

  // public sendValue(){

  //   this.onValue.emit(this.searchBoxInput.nativeElement.value)

  // }

}
