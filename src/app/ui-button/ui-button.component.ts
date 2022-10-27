import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ButtonService } from './button.service';

@Component({
  selector: 'app-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class UiButtonComponent implements OnInit {

  constructor(public buttonService: ButtonService) { }

  @Input()
  text = '';

  @Output('text-changed')
  textChanged = new EventEmitter();

  ngOnInit(): void {
    this.buttonService.currentText = this.text;

    this.buttonService.textChanged$.subscribe(text => {
      this.textChanged.emit({teste: text});
    })
  }
}
