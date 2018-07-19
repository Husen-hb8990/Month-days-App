function calendar(number){
var list = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
var month_Name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var month = list[number-1];
 var month_Name_List = month_Name[number-1];
var month_data = document.getElementById(month);
var num_days = cal_days(number);
var  str = "The Number of Days in"+" "+ month_Name_List+" " + "is:"+" "+num_days;
document.getElementById("display").innerHTML = str;
}
function cal_days(month_num){
var list = [31,28,31,30,31,30,31,31,30,31,30,31];
return list[month_num-1];
}