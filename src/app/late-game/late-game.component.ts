import { Component, OnInit } from '@angular/core';
import { Trigger } from '../models/trigger.model';
import { DatabaseService } from '../services/database.service';


@Component({
  selector: 'app-late-game',
  templateUrl: './late-game.component.html',
  styleUrls: ['./late-game.component.css']
})
export class LateGameComponent implements OnInit {

  constructor( private dbService: DatabaseService ) {

  }

  ngOnInit() {
  	this.dbService.lgTriggers.subscribe(
  		(dbTriggers) => {
  			this.currentTriggers = dbTriggers;
  			this.displayTriggers();
  		}
  	);
  	this.displayTriggers();
  }

  currentTriggers: Trigger[] = [];

  displayTriggers(){
  	return this.dbService.getLGTriggersToList().then(
  			(result) => {
  				this.currentTriggers = result;
  			}
  		);
  }
}
