
//NavBas
$(".PC").hide();
$(".tablet").hide();
$(".Phone").hide();
$(".NavBas_phone").hide();
//$(".NavBasWithHierarchyPcStyle").hide();
$(".NavBasWithHierarchyPhoneStyle").hide();

//$(".NasBas").hide();
//$(".NasBas_Detail").hide();

$(".FixNavWithHierarchy_phone").hide();

$(".FixNav_2phone").hide();
$(".FixNav_1phone").hide();
$("j").hide();
$("jphone").hide();


window.onload = function () {
    var wdth = $(window).width();
    //FixNav
    if (wdth < 768) {
        $(".pcStyle").hide();
        $(".phoneStyle").show();

    }
    if (wdth >= 768) {
        $(".pcStyle").show();
        $(".phoneStyle").hide();
    }


    if (wdth < 768) {
        //NavBasWithHierarchy
        $(".Big").hide();
        $(".Small").show();
        $(".Phone").show();
    }
    if (wdth >= 768) {
        //NavBasWithHierarchy
        $(".Big").show();
        $(".Small").hide();
        $(".Phone").hide();

        //NavBas
        $(".NavBas").show();
        $(".NavBas_Detail").hide();

    }

    if (wdth >= 1200) {
        $(".PC").show();
        $(".tablet").hide();
    }
    else {
        $(".PC").hide();
        $(".tablet").show();
    }

};


$(document).ready(function () {
    $(window).resize(function () {//判斷視窗大小 顯示菜單和隱藏菜單

        //FixNav
        var wdth = $(window).width();
        if (wdth < 768) {
            $(".pcStyle").hide();
            $(".phoneStyle").show();

        }
        if (wdth >= 768) {
            $(".pcStyle").show();
            $(".phoneStyle").hide();
        }


        if (wdth < 768) {
            //NavBasWithHierarchy
            $(".Big").hide();
            $(".Small").show();
            $(".Phone").show();
        }
        if (wdth >= 768) {
            //NavBasWithHierarchy
            $(".Big").show();
            $(".Small").hide();
            $(".Phone").hide();

            //NavBas
            //$(".NavBas").show();
            //$(".NavBas_Detail").hide();

        }

        if (wdth >= 1200) {
            $(".PC").show();
            $(".tablet").hide();
        }
        else {
            $(".PC").hide();
            $(".tablet").show();
        }

        //$(".NavBasWithHierarchyPcStyle").hide();
        //$(".NavBasWithHierarchyPhoneStyle").hide();
        //$("i").show();
        //$("j").hide();
        //$("iphone").show();
        //$("jphone").hide();


    });
});


var wdth = $(window).width();
$("i").mousedown(function () {
    $(".FixNav_2phone").show('slow');
    $(".FixNav_1phone").show('slow');
    $(".FixNavWithHierarchy_phone").show('slow');
    $("i").hide();
    $("j").show();


    //NavBasWithHierarchy
    //$(".NavBasWithHierarchyPcStyle").show('slow');
    $(".NavBasWithHierarchyPcStyle").animate({ left: "-5px" });
    $(".divBlack").animate({ left: "-5px" });

    //NavBasUD
    $(".NavBas").hide();
    $(".NavBas_Detail").animate({height:'toggle'},700);
    //NavBasLR
    $(".NavBas_DetailLR").animate({ left: '15px' });

}
);

$("j").mousedown(function () {
    $(".FixNav_2phone").hide('500');
    $(".FixNav_1phone").hide('500');
    $(".FixNavWithHierarchy_phone").hide('500');
    $("j").hide();
    $("i").show();

    //NavBasWithHierarchy
    //$(".NavBasWithHierarchyPcStyle").hide();
    $(".NavBasWithHierarchyPcStyle").animate({ left: "-328px" });
    $(".divBlack").animate({ left: "-325px" });

    
    //NavBasUD
    $(".NavBas").show();
    $(".NavBas_Detail").hide();
    //NavBasLR
    $(".NavBas_DetailLR").animate({ left: '-320px' });
}
);

//NavBas，NavBasWithHierarchy
$("iphone").mousedown(function () {

    $("iphone").hide();
    $("jphone").show();

    $(".NavBasWithHierarchyPhoneStyle").show('slow');
    $(".NavBas_phone").show();
}
);

$("jphone").mousedown(function () {

    $("jphone").hide();
    $("iphone").show();

    $(".NavBasWithHierarchyPhoneStyle").hide();
    $(".NavBas_phone").hide();
}
);


   
