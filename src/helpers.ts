export const uid = (): string => {
  const date: number = new Date().getTime();

  return date.toString();
};
