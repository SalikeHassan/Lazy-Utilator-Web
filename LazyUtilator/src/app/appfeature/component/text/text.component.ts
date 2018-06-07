import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  ckeditorContent: string = '<p>Write here</p>';
  name = 'ng2-ckeditor';
  ckeConfig: any;
  mycontent: string;
  log: string = '';
  @ViewChild("myckeditor") ckeditor: any;
  constructor() {
    this.mycontent = `<p>My html content</p>`;
   }

  ngOnInit() {
    this.ckeConfig = {
      allowedContent: true
    };

  }
  OnChange($event: any): void {
    console.log("onChange");
    console.log($event);
    //this.log += new Date() + "<br />";
  }
}
