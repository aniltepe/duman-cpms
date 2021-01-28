import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-risk-analysis',
  templateUrl: './risk-analysis.component.html',
  styleUrls: ['./risk-analysis.component.css']
})
export class RiskAnalysisComponent {

  filePath = new FormControl('', [Validators.required]);

  @ViewChild('fileDialog') fileDialog: ElementRef;

  constructor(private appService: AppService) { }

  FileInputOnClick = () => {
    this.fileDialog.nativeElement.click();
  }

  FileDialogOnChange = (ev: Event) => {
    let fullPath = (ev.target as HTMLInputElement).value;
    this.filePath.setValue(fullPath.split('\\')[fullPath.split('\\').length - 1]);
  }
}
