import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Trigger } from '../models/trigger.model';
import { StageService } from '../services/stage.service';
import { DatabaseService } from '../services/database.service';


@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
export class ToolComponent implements OnInit {

  constructor(private stageService: StageService,
          private dbService: DatabaseService) { 

  }

  gameStages = [
    "All Stages",
  	"Early Game",
    "Mid Game",
    "Late Game"
  ];

  allSounds = [
  	"Missing Ping",
    "Danger Ping",
    "Careful Ping"
  ];

  selectedStage = null;	
  selectedSound = null;
  secondsRepeated = null;
  desiredBehavior = null;

  ngOnInit() {
  }

  // When trigger details are completed and "add" buttonis pressed, 
  // use fields from the form to call onAddPressed()
  onAddTrigger(f: NgForm){
  	console.log("Add pressed!");
    // Add a trigger to the selected game-stage
    switch(this.selectedStage){
      case "All Stages": 
        this.addToEG(f.value.interval, f.value.behavior);
        this.addToMG(f.value.interval, f.value.behavior);
        this.addToLG(f.value.interval, f.value.behavior);
        console.log("Storing to all!");
        break;

      case "Early Game": console.log("Storing to Early");
        this.addToEG(f.value.interval, f.value.behavior);
        break;

      case "Mid Game": console.log("Storing to Mid");
        this.addToMG(f.value.interval, f.value.behavior);
        break;

      case "Late Game": console.log("Storing to Late");
        this.addToLG(f.value.interval, f.value.behavior);
        break;

      default: console.log(this.selectedStage + " No stage selected."); 
        //No stage was selected! Throw an error!
        break;
    }
  }

  addToEG(interval: number, behavior: string){
    this.dbService.storeTriggerEarly(this.selectedStage,
                  this.selectedSound, interval, behavior)
                  .subscribe(
                    (response) => console.log(response),
                    (error) => console.log(error)
                    );
    this.onEGAdded();
  }

  onEGAdded(){
    this.dbService.getEGTriggersToList().then(
        (result) => {
          setTimeout(() => {
            this.dbService.egTriggers.emit(result);
          }, 800);
        }
      );
  }

  addToMG(interval: number, behavior: string){
    this.dbService.storeTriggerLate(this.selectedStage,
                  this.selectedSound, interval, behavior)
                  .subscribe(
                    (response) => console.log(response),
                    (error) => console.log(error)
                    );
    this.onMGAdded();
  }

  onMGAdded(){
    this.dbService.getMGTriggersToList().then(
        (result) => {
          setTimeout(() => {
            this.dbService.mgTriggers.emit(result);
          }, 800);
        }
      );
  }

  addToLG(interval: number, behavior: string){
    this.dbService.storeTriggerLate(this.selectedStage,
                  this.selectedSound, interval, behavior)
                  .subscribe(
                    (response) => console.log(response),
                    (error) => console.log(error)
                    );
    this.onLGAdded();
  }

  onLGAdded(){
    this.dbService.getLGTriggersToList().then(
        (result) => {
          setTimeout(() => {
            this.dbService.lgTriggers.emit(result);
          }, 800);
        }
      );
  }

}
