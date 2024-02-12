import { calculateAge } from "./calculateAge";

function isValidDate(year, month, day) {
  month = month - 1;
  var d = new Date(year, month, day);
  if (d.getFullYear() == year && d.getMonth() == month && d.getDate() == day) {
    return true;
  }
  return false;
}

export const checkValidty = (year, month, day, setInputs) => {
  if (!isValidDate(year, month, day)) {
    setInputs((prevInputs) => {
      const updatedInputs = [...prevInputs];
      updatedInputs[0] = {
        ...updatedInputs[0],
        errorMessage: 'Must be a valid Date',
      };
      return updatedInputs;
    });
  }
};
