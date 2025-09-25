'use client';

import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isExpired, setIsExpired] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Mark as mounted to prevent hydration mismatch
    setIsMounted(true);

    // Target date: October 2nd at 2:00pm (current year)
    const targetDate = new Date();
    targetDate.setMonth(9); // October (0-indexed)
    targetDate.setDate(2);
    targetDate.setHours(14, 0, 0, 0); // 2:00pm

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
        setIsExpired(false);
      } else {
        setIsExpired(true);
      }
    };

    // Update immediately
    updateCountdown();

    // Update every second
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  // Don't render anything until mounted to prevent hydration mismatch
  if (!isMounted) {
    return (
      <div className="text-center">
        <h2 className="text-lg md:text-xl font-bold mb-4 text-white">
          Countdown to First Tee Shot!
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          <div className="bg-white/90 text-black p-2 md:p-3 rounded-lg">
            <div className="text-2xl md:text-3xl font-bold">--</div>
            <div className="text-xs md:text-sm">Days</div>
          </div>
          <div className="bg-white/90 text-black p-2 md:p-3 rounded-lg">
            <div className="text-2xl md:text-3xl font-bold">--</div>
            <div className="text-xs md:text-sm">Hours</div>
          </div>
          <div className="bg-white/90 text-black p-2 md:p-3 rounded-lg">
            <div className="text-2xl md:text-3xl font-bold">--</div>
            <div className="text-xs md:text-sm">Minutes</div>
          </div>
          <div className="bg-white/90 text-black p-2 md:p-3 rounded-lg">
            <div className="text-2xl md:text-3xl font-bold">--</div>
            <div className="text-xs md:text-sm">Seconds</div>
          </div>
        </div>
      </div>
    );
  }

  // Don't render anything if the countdown has expired
  if (isExpired) {
    return null;
  }

  return (
    <div className="text-center">
      <h2 className="text-lg md:text-xl font-bold mb-4 text-white">
        Countdown to First Tee Shot!
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
        <div className="bg-white/90 text-black p-2 md:p-3 rounded-lg">
          <div className="text-2xl md:text-3xl font-bold">{timeLeft.days}</div>
          <div className="text-xs md:text-sm">Days</div>
        </div>
        <div className="bg-white/90 text-black p-2 md:p-3 rounded-lg">
          <div className="text-2xl md:text-3xl font-bold">{timeLeft.hours}</div>
          <div className="text-xs md:text-sm">Hours</div>
        </div>
        <div className="bg-white/90 text-black p-2 md:p-3 rounded-lg">
          <div className="text-2xl md:text-3xl font-bold">{timeLeft.minutes}</div>
          <div className="text-xs md:text-sm">Minutes</div>
        </div>
        <div className="bg-white/90 text-black p-2 md:p-3 rounded-lg">
          <div className="text-2xl md:text-3xl font-bold">{timeLeft.seconds}</div>
          <div className="text-xs md:text-sm">Seconds</div>
        </div>
      </div>
    </div>
  );
}
