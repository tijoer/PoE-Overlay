import { FeatureSettings } from '@app/feature';

export enum TradeLayout {
    TopToBottom,
    BottomToTop
}

export enum TradeFilter {
    IncomingOutgoing,
    Incoming
}

export interface TradeFeatureSettings extends FeatureSettings {
    tradeEnabled: boolean;
    tradeMessageWait: string;
    tradeMessageStillInterested: string;
    tradeMessageItemGone: string;
    tradeMessageThanks: string;
    tradeWindowPinned: boolean;
    tradeStashFactor: {
        [key: string]: number
    };
    tradeSoundEnabled: boolean;
    tradeSoundVolume: number;
    tradeFilter: TradeFilter;
    tradeLayout: TradeLayout;
}