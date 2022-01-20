export const getInputValue = (target: EventTarget & HTMLInputElement) => {
  return target.type === 'checkbox' ? target.checked : target.value;
};
