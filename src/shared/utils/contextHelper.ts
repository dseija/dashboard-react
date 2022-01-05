import { createContext } from 'react';

export const contextGenerator = (defaultValue: any) => {
  type contextType = [
    typeof defaultValue,
    React.Dispatch<React.SetStateAction<typeof defaultValue>>
  ];
  return createContext<contextType>([defaultValue, () => null]);
};
