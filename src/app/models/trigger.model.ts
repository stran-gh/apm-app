export class Trigger {
	public sound: string;
	public interval: number;
	public behavior: string;
	constructor(sound: string, interval: number, behavior: string) {
		this.sound = sound;
		this.interval = interval;
		this.behavior = behavior;
	}
}