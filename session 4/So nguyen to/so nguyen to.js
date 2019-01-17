var tbId = document.getElementById("tbId");
var snt = "<tr><td>2</td>";
var kt =0;


for (var i = 3 ; i <= 100 ; i++) { // kiem tra tu so 3 vi so 2 da la so nguyen to
    var dem = 0;
    for (var j =2 ; j < i ; j ++) { //kiem tra chia het cho 1 va chinh no
        if (i %j == 0) {
            dem++;
        }
    }
    if (dem ==0) {
        snt += "<td>";
        snt +=  i;
        snt += "</td>";
        kt++;
    }
    if (kt == 19) {
        break;

        }
}


snt += "</tr>";
tbId.innerHTML = snt;