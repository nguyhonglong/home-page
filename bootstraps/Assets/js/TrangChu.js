function search() {
    var count = 0;
    element = document.getElementById('search').value;
    console.log(element);
    mobile = document.getElementsByClassName('mobile');
    for (var i = 0; i < mobile.length; i++) {
        mobile[i].classList.remove("active");
        mobile[i].classList.remove("inactive"); 
        if (mobile[i].className == ("mobile " + element + " col-md-2")) {
            console.log("add active");
            mobile[i].classList.add("active");
        }
        else {
            mobile[i].classList.add("inactive");
            count++;
        }
    }
    if (count==13) {
        for (var i = 0; i < mobile.length; i++) {
            mobile[i].classList.add("active");
        }
    }
}

function click() {
    $('body').delegate('.btn', 'click', function () {
        $('.mobile').addClass('inactive');
        var loai = $(this).attr('v');
       
        if (loai == "0") {
            $('.mobile').removeClass('inactive');
        }else
        $('.' + loai).removeClass('inactive');
    })
}

function area() {

    if (document.getElementById("mien_bac").checked) {
        document.getElementById("area").innerHTML = "111 Trần Đăng Ninh, Cầu Giấy, Hà Nội: 0976.73.2468  \n446 Xã Đàn, Đống Đa, Hà Nội: 096.111.2468 \n118 Thái hà, Đống Đa, Hà Nội: 096.424.2468 \n312 Nguyễn Trãi, P.Trung Văn, Q.Nam Từ Liêm, Hà Nội(gần Đại Học Hà Nội): 094.698.2468 \n380 Trần Phú, Ba Đình, TP.Thanh Hóa:0969.14.2468 ";
       
    }

    if (document.getElementById("mien_trung").checked) {
        document.getElementById("area").innerHTML = "312 Nguyễn Trãi, P.Trung Văn, Q.Nam Từ Liêm, Hà Nội (gần Đại Học Hà Nội): 094.698.2468 380 Trần Phú, Ba Đình, TP.Thanh Hóa:"

    }

    if (document.getElementById("mien_nam").checked) {
        document.getElementById("area").innerHTML = "42 Trần Quang Khải, P.Tân Định, Quận 1, HCM: 0968.371.357 499 Nguyễn Thị Thập, Q.7, HCM: 0964.75.0268";
    }
}

function menu() {
    console.log("click-menu");
    if (document.getElementById("sub-menu").style.display == "block")
        document.getElementById("sub-menu").style.display = "none";
        else
        document.getElementById("sub-menu").style.display = "block";
    
}


