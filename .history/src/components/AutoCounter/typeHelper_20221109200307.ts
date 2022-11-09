

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
    startAmount?: ((props: Readonly<Props>) => Number) | undefined,
    endAmount: ((props: Readonly<Props>) => Number) | undefined,
    duration?: ((props: Readonly<Props>) => Number) | undefined,
    autoinit?: ((props: Readonly<Props>) => Boolean) | undefined,
    prefix?: ((props: Readonly<Props>) => String) | undefined,
    suffix?: ((props: Readonly<Props>) => String) | undefined,
    separator?: ((props: Readonly<Props>) => String) | undefined,
    decimalSeparator?: ((props: Readonly<Props>) => String) | undefined,
    decimals?: ((props: Readonly<Props>) => Number) | undefined,
}
