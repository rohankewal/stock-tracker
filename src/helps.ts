export const getNextMarketOpen = (now: Date) => {
  const marketOpen = new Date(now);
  marketOpen.setUTCHours(13);
  marketOpen.setUTCMinutes(30);
  marketOpen.setUTCSeconds(0);
  marketOpen.setUTCMilliseconds(0);

  if (marketOpen < now) {
    marketOpen.setDate(marketOpen.getDate() + 1);
  }

  return marketOpen;
};

export const getNextMarketClose = (now: Date) => {
  const marketClose = new Date(now);
  marketClose.setUTCHours(20);
  marketClose.setUTCMinutes(0);
  marketClose.setUTCSeconds(0);
  marketClose.setUTCMilliseconds(0);

  if (marketClose < now) {
    marketClose.setDate(marketClose.getDate() + 1);
  }

  return marketClose;
};

export const getTimeLeft = (start: Date, end: Date) => {
  const totalSeconds = Math.floor((end.getTime() - start.getTime()) / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  return { days, hours, minutes, seconds };
};
