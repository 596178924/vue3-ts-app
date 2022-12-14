export interface State {
	timestamp: number;
	startTimestamp: number;
	currentStartAmount: number;
	currentAmount: number;
	currentDuration: number;
	paused: boolean;
	remaining: number;
	animationFrame: number;
}
