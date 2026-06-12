export interface DeepSeekBalance {
  is_available: boolean;
  balance_infos: Array<{
    currency: string;
    total_balance: string;
    granted_balance: string;
    topped_up_balance: string;
  }>;
}

export interface TokenUsageStats {
  session_id?: string;
  completion_tokens: number;
  prompt_tokens: number;
  cache_creation_input_tokens?: number;
  cache_read_input_tokens?: number;
}

export interface MonitorStats {
  balance: DeepSeekBalance | null;
  lastUpdated: Date;
  totalPromptTokens: number;
  totalCompletionTokens: number;
  totalCacheCreationTokens: number;
  totalCacheReadTokens: number;
  cacheHitRate: number;
}

export interface CLIConfig {
  apiKey: string;
  refreshInterval: number;
  enableNotifications: boolean;
  lowBalanceThreshold?: number;
}
