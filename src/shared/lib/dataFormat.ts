export const getDataFormat = (data: string, divider?: string) => {
  if (!data) return '';
  const [year, month, day] = data.split(divider || '-');
  return `${day}.${month}.${year}`;
};
