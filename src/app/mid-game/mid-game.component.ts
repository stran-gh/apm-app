import { Component, OnInit } from '@angular/core';
import { Trigger } from '../models/trigger.model';
import { DatabaseService } from '../services/database.service';


@Component({
  selector: 'app-mid-game',
  templateUrl: './mid-game.component.html',
  styleUrls: ['./mid-game.component.css']
})
export class MidGameComponent implements OnInit {

  constructor( private dbService: DatabaseService) {

  }

  ngOnInit() {
  	this.dbService.mgTriggers.subscribe(
  		(dbTriggers) => {
  			this.currentTriggers = dbTriggers;
  			this.displayTriggers();
  		}
  	);
  	this.displayTriggers();
  }

  currentTriggers: Trigger[] = [];

  displayTriggers(){
  	return this.dbService.getMGTriggersToList().then(
  			(result) => {
  				this.currentTriggers = result;
  			}
  		);
  }
}
