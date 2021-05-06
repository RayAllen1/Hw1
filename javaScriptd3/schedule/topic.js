var topic=[
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性"
];

var startDate = new Date();
// 做出屬於日期時間格式的東西

function setMonthAndDay(startMonth, startDay){
    // 把社長說的日期，變成JavaScript需要的日期時間格式
    startDate.setMonth(startMonth-1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
    // setMonth()其實可以同時設定月份跟日子
    // 跑到函數中 月份你要減1
}

setMonthAndDay(4,25);