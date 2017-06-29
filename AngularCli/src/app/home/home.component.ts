import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import  { FilterPipe } from "../filter.pipe";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // pipes: [FilterPipe]
})
export class HomeComponent implements OnInit {

  StudentDetails = [
    {name: "Shrinivass      :", courses: "Data Visualization"},
    {name: "ABS     :", courses: "Machine Learning"},
    {name: "Kishore      :", courses: "Visualization"},
    {name: "Sundar     :", courses: "Algorithm"},
    {name: "Arcane      :", courses: "Visualization"}

  ];
  // homeTitle = "Welcome to homepage";
  // classes = {'blue': false, 'red': true, 'underline': false};
  // myString = "New Value";
  // myBoolean = true;

  // details = {
  //   name: "Shrinivass",
  //   course: "Data Visualization"
  // }

  // alertMe(){
  //   alert("Hey there !!!");
  // }

  @Input() details;
  @Output() onYell = new EventEmitter();

  fireYellEvent(e){
    this.onYell.emit(e);
    console.log(e);
  }

  constructor() { }

  ngOnInit() {
  }

}
