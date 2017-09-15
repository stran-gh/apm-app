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

  ngOnInit() {
  	this.dbService.egTriggers.subscribe(
  		(dbTriggers) => {
  			this.currentTriggers = dbTriggers;
  			this.displayTriggers();
  		}
  	);
  	this.displayTriggers();
  }

  currentTriggers: Trigger[] = [];

  displayTriggers(){
  	return this.dbService.getEGTriggersToList().then(
  			(result) => {
  				this.currentTriggers = result;
  			}
  		);
  }



}
