import { useEffect, useState } from "react";

const DateTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const parts = new Intl.DateTimeFormat("en-US", {
        weekday: "short",
        day: "numeric",
        month: "short",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }).formatToParts(now);

      const get = (type) =>
        parts.find((p) => p.type === type)?.value;

      const formatted = `${get("weekday")} ${get("day")} ${get("month")} ${get("hour")}:${get("minute")} ${get("dayPeriod")}`;

      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return <div className="mac-datetime">{time}</div>;
};

export default DateTime;
