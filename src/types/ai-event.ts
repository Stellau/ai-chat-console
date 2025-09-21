export type Severity = 'low' | 'med' | 'high';
export type FinishReason = 'stop' | 'cancelled_by_user' | 'error';

export interface TurnStart {
  type: 'turn.start';
  convoId: string;
  turnId: string;
  model?: string;
  startedAt?: number;
  prompTokens?: number;
}

export interface TurnDelta {
  type: 'turn.delta';
  turnId: string;
  text: string;
  elapsedMs: number;
  tokensOut: number;
}

export interface SafetyFlag {
  type: 'safety.flag';
  turnId: string;
  range: { start: number; end: number };
  snippet: string;
  categories: [{ name: 'PII'; severity: Severity }];
}

export interface TurnEnd {
  type: 'turn.end';
  turnId: string;
  finishReason: FinishReason;
  totalMs?: number;
  tokensOut?: number;
}

export type AIEvent = TurnStart | TurnDelta | SafetyFlag | TurnEnd;
