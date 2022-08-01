import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

@Input()
public question: string;

@Output()
public report = new EventEmitter<string>();

public send(level: string) :void{
this.report.emit(level);
}

  constructor() { }

  ngOnInit(): void {
  }

}
