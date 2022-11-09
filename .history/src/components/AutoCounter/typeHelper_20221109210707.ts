export interface State {
	timestamp: number;
	startTimestamp: number|null|undefined;
	currentStartAmount: number;
	currentAmount: number;
	currentDuration: number;
	paused: boolean;
	remaining: number;
	animationFrame: number;
}

export interface Props {
    startAmount?: number,
    endAmount: number,
    duration?: number,
    autoinit?: boolean,
    prefix?: string,
    suffix?: string,
    separator?: string,
    decimalSeparator?: string,
    decimals?: number,
}
