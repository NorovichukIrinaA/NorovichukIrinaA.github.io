 $(document).ready(function() {
    $('#myBtn').on('click',function () {
        var weight = Number(document.getElementById("weight").value);
        var height = Number(document.getElementById("height").value);
        if (  weight + height < 1000  && weight + height > 0 ) {
            var imt = +weight / (height * height) * 10000;
            imt = imt.toFixed(2);
            document.getElementById("imt").innerHTML = imt;
        } else{
            document.getElementById("imt").innerHTML = "Неверные данные";
        }
    })

     $(".resize img").click(function(){
        var src = $(this).attr('src');
        $(".popup_bg").append("<img src="+src+" class='popup_img' />");
        $(".popup").fadeIn(500);
        $('.popup').on('click', function(){
            $(".popup").fadeOut(500);
            setTimeout(function() {
                $(".popup_img").remove();
            }, 500);
        });
    });
});
