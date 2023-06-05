export const formatDateToYYYYMMDD = (date: Date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const formatThreeMonthsDay = (date: Date) => {
  const inputDate = new Date(date);

  const adjustedDate = new Date(
    inputDate.getFullYear(),
    inputDate.getMonth() - 3,
    inputDate.getDate() + 1,
  );

  const finalDate =
    adjustedDate < new Date(2023, 2, 1) ? new Date(2023, 2, 1) : adjustedDate;

  const year = finalDate.getFullYear();
  const month = (finalDate.getMonth() + 1).toString().padStart(2, '0');
  const day = finalDate.getDate().toString().padStart(2, '0');

  const formattedDate = `${year}.${month}.${day}`;

  return formattedDate;
};
