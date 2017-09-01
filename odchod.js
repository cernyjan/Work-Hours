function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
var dd = today.getDate() - 1;
m = (m % 5==0) ? m : m-m%5 +5;
if (m > 59) {
	h = h + 1;
	m = 0;
}
// add a zero in front of numbers<10
m = checkTime(m);
h = checkTime(h);
var pattern = "input#MRepeater_theDataList_DayRepeater_"+dd+"_theRepeater_"+dd+"_TxtAddFrom";
$(pattern).val(h+":"+m);

var input = document.getElementById("MRepeater_theDataList_submit_all");
input.click();