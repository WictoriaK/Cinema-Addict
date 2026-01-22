import dayjs from 'dayjs';

const humanizeDate = (date, dateFormat) => dayjs(date).format(dateFormat);

export {humanizeDate};
