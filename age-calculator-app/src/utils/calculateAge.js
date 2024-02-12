export const calculateAge = (year, month, day) => {
  const currentDate = new Date();
  const birthDate = new Date(year, month - 1, day); // Months in JavaScript are zero-based, so we subtract 1.

  let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
  let ageMonths = currentDate.getMonth() - birthDate.getMonth();
  let ageDays = currentDate.getDate() - birthDate.getDate();

  if (
    ageMonths < 0 ||
    (ageMonths === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    ageYears--;
    ageMonths += 12;
  }

  const lastMonthDays = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    0
  ).getDate();
  if (ageDays < 0) {
    ageMonths--;
    ageDays += lastMonthDays;
  }

  return {
    years: ageYears,
    months: ageMonths,
    days: ageDays,
  };
};
