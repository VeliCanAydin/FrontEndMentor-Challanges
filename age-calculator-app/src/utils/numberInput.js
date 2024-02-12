export const numberInput = (event) => {
  const { value } = event.target;
  const onlyNumbers = value.replace(/[^0-9]/g, ''); // Keep only numbers
  event.target.value = onlyNumbers; // Show only numbers
};
