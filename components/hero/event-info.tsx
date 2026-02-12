"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function EventInfo() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-05-15T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-12 md:mt-16 pt-8 border-t border-gray-700">
      <div className="flex gap-8 md:gap-12">
        {/* Status */}
        <div>
          <p className="text-red-500 text-xs font-bold uppercase tracking-wider mb-2">STATUS</p>
          <p className="text-white text-base font-bold">COMING_SOON</p>
        </div>

        {/* Location */}
        <div>
          <p className="text-red-500 text-xs font-bold uppercase tracking-wider mb-2">LOCATION</p>
          <p className="text-white text-base font-bold">FAST_NUCES</p>
        </div>

        {/* Countdown */}
        <div>
          <p className="text-red-500 text-xs font-bold uppercase tracking-wider mb-2">COUNTDOWN</p>
          <p className="text-white text-base font-bold">
            {String(timeLeft.days).padStart(2, "0")}_DAYS : {String(timeLeft.hours).padStart(2, "0")}_HRS :{" "}
            {String(timeLeft.minutes).padStart(2, "0")}_MINS : {String(timeLeft.seconds).padStart(2, "0")}_SECS
          </p>
        </div>
      </div>
    </div>
  );
}
