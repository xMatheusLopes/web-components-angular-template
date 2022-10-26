import { Component, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { EventEmitter } from 'stream';
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

  ngOnInit(): void {
    this.buttonService.currentText = this.text;

    this.buttonService.textChanged$.subscribe(text => {
      this.output({teste: "ok"})
    })
  }

  output(data: any) {
    const event = new CustomEvent('text-changed', { detail: data });
    document.dispatchEvent(event)
  }

}
