import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
export class ToolComponent implements OnInit {

  constructor() { }

  gameStages = [
  	{ id: 0, name: "All Stages" },
  	{ id: 1, name: "Early Game" },
  	{ id: 2, name: "Mid Game" },
  	{ id: 3, name: "Late Game" }
  ];

  allSounds = [
  	{ id: 0, name: "Missing Ping" },
  	{ id: 1, name: "Danger Ping" },
  	{ id: 2, name: "Careful Ping" }
  ];

  selectedStage = null;	

  selectedSound = null;
  secondsRepeated = null;
  desiredBehavior = null;

  ngOnInit() {
  }

  onAddTrigger(f: NgForm){
  	console.log("Add pressed!");
  }

}
