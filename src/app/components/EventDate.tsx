import { useEffect, useState } from "react";

const EventDate = () => {
  const [nextThursday, setNextThursday] = useState<Date>();

  useEffect(() => {
    const getNextThursday = () => {
      const today = new Date();
      const resultDate = new Date(today);

      // 4 is Thursday
      let daysUntilThursday = (4 - today.getDay() + 7) % 7 || 7;

      // If today is Thursday and it's past 9pm, get next week's Thursday
      if (today.getDay() === 4 && today.getHours() >= 21) {
        daysUntilThursday = 7;
      }

      resultDate.setDate(today.getDate() + daysUntilThursday);
      return resultDate;
    };

    const updateDate = () => {
      setNextThursday(getNextThursday());
    };

    updateDate();

    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const timeUntilMidnight = tomorrow.getTime() - now.getTime();

    const timer = setTimeout(() => {
      updateDate();
      // Set up daily updates after the first update
      const dailyTimer = setInterval(updateDate, 24 * 60 * 60 * 1000);
      return () => clearInterval(dailyTimer);
    }, timeUntilMidnight);

    return () => clearTimeout(timer);
  }, []);

  if (!nextThursday) return null;

  const formattedDate = nextThursday
    .toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    })
    .toLowerCase();

  return <span className="whitespace-nowrap">{formattedDate} • 6-9pm</span>;
};

export default EventDate;
