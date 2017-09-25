import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Trigger } from '../models/trigger.model';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-early-game',
  templateUrl: './early-game.component.html',
  styleUrls: ['./early-game.component.css']
})
export class EarlyGameComponent implements OnInit {

  constructor(private dbService: DatabaseService) { 

  }

  egSounds: string[] = [];
  currentTriggers: Trigger[] = [];

  ngOnInit() {
  	//Subscribe to any changes in egTriggers EventEmitter to display properly
  	this.dbService.egTriggers.subscribe(
  		(dbTriggers) => {
  			this.currentTriggers = dbTriggers;
  			this.displayTriggers();
  		}
  	);

  	//Subscribe to egStart EventEmitter to communicate when game is started
  	this.dbService.egStart.subscribe(
  		(result) =>{
  			this.onStartPressed();
  		});

  	this.displayTriggers();
  }

  // Updates the triggers of EG to display properly
  displayTriggers(){
  	return this.dbService.getEGTriggersToList().then(
  			(result) => {
  				this.currentTriggers = result;
  			}
  		);
  }

  // Called from button, deletes the selected trigger
  onDeletePressed(sound: string){
  	this.dbService.deleteFromEG(sound);
  	this.displayTriggers();
  }

  // When a game is started, prepares all sounds to be played
  onStartPressed(){
  	// All sounds are added to the array to be prepared as Audio
  	for(let index in this.currentTriggers){
  		this.egSounds.push(this.currentTriggers[index].sound);
  	}
  	console.log(this.egSounds);

  	

  }


}
