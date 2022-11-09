

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
    startAmount?: Number | undefined,
    endAmount: Number | undefined,
    duration?: Number | undefined,
    autoinit?: Boolean | undefined,
    prefix?: String | undefined,
    suffix?: String | undefined,
    separator?: String | undefined,
    decimalSeparator?: String | undefined,
    decimals?: String | undefined,
}
