var date_1 = new Date("2022-07-18");
var date_2 = new Date("2022-09-18");

var day_as_milliseconds = 86400000;
var diff_in_millisenconds = date_2 - date_1;
var diff_in_days = diff_in_millisenconds / day_as_milliseconds;

console.log(diff_in_days);
