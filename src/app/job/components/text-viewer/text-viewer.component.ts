import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-viewer',
  templateUrl: './text-viewer.component.html',
  styleUrls: ['./text-viewer.component.css']
})
export class TextViewerComponent implements OnInit {

  @Input() content: any = ''

  constructor() { }

  ngOnInit(): void {
  }

}
