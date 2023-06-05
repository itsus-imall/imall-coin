export const formatDateToYYYYMMDD = (date: Date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const formatThreeMonthsDay = (date: Date) => {
  const inputDate = new Date(date);

  // 3개월을 뺀 날짜 계산
  const adjustedDate = new Date(
    inputDate.getFullYear(),
    inputDate.getMonth() - 3,
    inputDate.getDate() + 1,
  );

  // 2023년 3월 1일과 비교하여 조정
  const finalDate =
    adjustedDate < new Date(2023, 2, 1) ? new Date(2023, 2, 1) : adjustedDate;

  // yyyy년 MM월 dd일 형식으로 변환
  const formattedDate = `${finalDate.getFullYear()}년 ${
    finalDate.getMonth() + 1
  }월 ${finalDate.getDate()}일`;

  return formattedDate;
};
