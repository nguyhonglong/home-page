var soLanThapHuong = 0
var soLanTangHoa = 0
var soLanDm = 0

const thaphuong = document.getElementById("thaphuong");
const tanghoa = document.getElementById("tanghoa");


function incthaphuong(){
    soLanThapHuong++
    document.getElementById("thaphuong").innerHTML = "Hôm nay bạn đã thắp hương " +soLanThapHuong +" lần";
}

function incTangHoa(){
    soLanTangHoa++
    document.getElementById("tanghoa").innerHTML = "Số người đã tặng hoa cho con chó Thắng: " +soLanTangHoa +" người";
}

function incChui(){
    soLanTangHoa++
    document.getElementById("chui").innerHTML = "Địt mẹ con chó Thắng x " +soLanTangHoa ;
}