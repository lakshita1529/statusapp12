
export const getPeriod = (): "SOD" | "EOD" => {
    const currentHour = new Date().getHours();
    return currentHour >= 6 && currentHour < 18 ? "SOD" : "EOD";
  };
  