import { Trigger } from '../models/trigger.model';
import { Injectable } from '@angular/core';

@Injectable()
export class StageService {
	constructor(){

	}

	addToList(stage: string, trigger: string, interval: number, behavior: string){
		console.log(stage);
		console.log(trigger);
		console.log(interval);
		console.log(behavior);
	}
}