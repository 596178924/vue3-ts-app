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

export interface Props {
    startAmount?: (Number|undefined),
    endAmount: Number,
    duration?: Number,
    autoinit?: Boolean,
    prefix?: String,
    suffix?: String,
    separator?: String,
    decimalSeparator?: String,
    decimals?: String,
}
