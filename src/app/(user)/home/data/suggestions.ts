export interface Suggestion {
  id: string;
  title: string;
  subtitle: string;
}

export const SUGGESTIONS: Suggestion[] = [
  {
    id: 'launch-token',
    title: 'Launch a new token',
    subtitle: 'Deploy a new token on pump.fun',
  },
  {
    id: 'swap-sol-usdc',
    title: 'Swap 1 SOL for USDC',
    subtitle: 'Use Jupiter to swap on Solana',
  },
  {
    id: 'solana-trends',
    title: "What's trending on Solana?",
    subtitle: 'Discover current market trends',
  },
  {
    id: 'price-feed',
    title: "What's the price of SOL?",
    subtitle: 'Check the current price of SOL',
  },
  {
    id: 'top-gainers-last-24h',
    title: 'Top gainers in the last 24h',
    subtitle: 'Find the top performers in the last 24 hours',
  },
  {
    id: 'check-my-wallet',
    title: 'Check my wallet',
    subtitle: 'View your wallet portfolio and holdings',
  },
  {
    id: 'sell-everything-buy-bark',
    title: 'Sell everything and buy $BARK',
    subtitle: 'Swap all your tokens for $BARK',
  },
  {
    id: 'phantom-updates',
    title: 'Any updates from @phantom recently?',
    subtitle: 'Summarize the latest tweets from @phantom',
  },
  {
    id: 'bark-updates',
    title: 'What has BARK Protocol been doing recently?',
    subtitle: 'Get a summary of recent BARK Protocol tweets',
  },
  {
    id: 'disaster-relief-donation',
    title: 'Donate for disaster relief',
    subtitle: 'Support relief efforts using Solana-based payments',
  },
  {
    id: 'social-finance-initiatives',
    title: 'Invest in social finance initiatives',
    subtitle: 'Back projects that drive social change',
  },
  {
    id: 'charity-auction',
    title: 'Participate in a charity auction',
    subtitle: 'Bid on NFTs to support good causes',
  },
  {
    id: 'support-local-charities',
    title: 'Support local charities',
    subtitle: 'Donate Solana tokens to verified organizations',
  },
  {
    id: 'crowdfunding-campaign',
    title: 'Start a crowdfunding campaign',
    subtitle: 'Raise funds for community-driven projects',
  },
];

export function getRandomSuggestions(count: number): Suggestion[] {
  // Ensure the requested count does not exceed the number of available suggestions
  const safeCount = Math.min(count, SUGGESTIONS.length);

  // Create a shuffled copy of the SUGGESTIONS array
  const shuffledSuggestions = [...SUGGESTIONS].sort(() => Math.random() - 0.5);

  // Return the first safeCount items
  return shuffledSuggestions.slice(0, safeCount);
}
