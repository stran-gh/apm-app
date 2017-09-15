import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Trigger } from '../models/trigger.model';
import { EventEmitter } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class DatabaseService{
	constructor(private http: Http){

	}

	egTriggers = new EventEmitter<Trigger[]>();
	mgTriggers = new EventEmitter<Trigger[]>();
	lgTriggers = new EventEmitter<Trigger[]>();


	storeTriggerEarly(stage: string, sound: string, interval: number, behavior: string){
		console.log("In Store Early");
		return this.http.post(
			'https://apmproject-438ac.firebaseio.com/early-game.json',
			 new Trigger(sound, interval, behavior)
			 );
	}

	storeTriggerMid(stage: string, sound: string, interval: number, behavior: string){
		console.log("In Store Mid");
		return this.http.post(
			'https://apmproject-438ac.firebaseio.com/mid-game.json',
			 new Trigger(sound, interval, behavior)
			 );
	}

	storeTriggerLate(stage: string, sound: string, interval: number, behavior: string){
		console.log("In Store Late");
		return this.http.post(
			'https://apmproject-438ac.firebaseio.com/late-game.json',
			 new Trigger(sound, interval, behavior)
			 );
	}

	displayAllTriggers(){
		this.egTriggers.emit();
	}

	getEGTriggersToList() : Promise <any>{
		var data = firebase.database().ref("/early-game");
		let triggerList : Trigger[] = [];
		return new Promise<any>((resolve, reject) => {
			data.on('value', function(snapshot){
				triggerList = [];
				var dataList = snapshot.val();
				for(let key in dataList){
					triggerList.push(new Trigger(dataList[key].sound, dataList[key].interval, dataList[key].behavior));
				}
				resolve(triggerList);
			})
		});
	}

	getMGTriggersToList() : Promise <any>{
		var data = firebase.database().ref("/mid-game");
		let triggerList : Trigger[] = [];
		return new Promise<any>((resolve, reject) => {
			data.on('value', function(snapshot){
				triggerList = [];
				var dataList = snapshot.val();
				for(let key in dataList){
					triggerList.push(new Trigger(dataList[key].sound, dataList[key].interval, dataList[key].behavior));
				}
				resolve(triggerList);
			})
		});
	}

	getLGTriggersToList() : Promise <any>{
		var data = firebase.database().ref("/late-game");
		let triggerList : Trigger[] = [];
		return new Promise<any>((resolve, reject) => {
			data.on('value', function(snapshot){
				triggerList = [];
				var dataList = snapshot.val();
				for(let key in dataList){
					triggerList.push(new Trigger(dataList[key].sound, dataList[key].interval, dataList[key].behavior));
				}
				resolve(triggerList);
			})
		});
	}

	addToList(stage: string, trigger: string, interval: number, behavior: string){
		console.log(stage);
		console.log(trigger);
		console.log(interval);
		console.log(behavior);
	}
}