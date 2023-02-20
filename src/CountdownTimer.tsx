import { useEffect, useState } from "react";
import { getNextMarketOpen, getNextMarketClose, getTimeLeft } from "./helps";

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const marketOpen = getNextMarketOpen(now);
      const marketClose = getNextMarketClose(now);

      let timeLeft;

      if (now < marketOpen) {
        timeLeft = getTimeLeft(now, marketOpen);
      } else if (now < marketClose) {
        timeLeft = getTimeLeft(now, marketClose);
      } else {
        timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      setCountdown(timeLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">
        <div className="p-2 mx-2">
          <div className="text-3xl text-white font-bold">{countdown.days}</div>
          <div className="text-sm text-white font-semibold">Days</div>
        </div>
        <div className="rounded-md p-2 mx-2">
          <div className="text-3xl text-white font-bold">{countdown.hours}</div>
          <div className="text-sm text-white font-semibold">Hours</div>
        </div>
        <div className="rounded-md p-2 mx-2">
          <div className="text-3xl text-white font-bold">
            {countdown.minutes}
          </div>
          <div className="text-sm text-white font-semibold">Minutes</div>
        </div>
        <div className="rounded-md p-2 mx-2">
          <div className="text-3xl text-white font-bold">
            {countdown.seconds}
          </div>
          <div className="text-sm text-white font-semibold">Seconds</div>
        </div>
      </div>
      <div className="text-sm font-semibold text-yellow-400">
        The stock market opens at 9:30am EST and closes at 4:00pm EST
      </div>
    </div>
  );
};

export default CountdownTimer;
