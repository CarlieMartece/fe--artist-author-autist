const dayjs = require("dayjs");

export default function formatDate (date) {
    const getDate = dayjs(date);
    const day = Number(getDate.$D);
    const month = Number(getDate.$M) + 1;
    const year = Number(getDate.$y);

    return `${day}/${month}/${year}`;
}
