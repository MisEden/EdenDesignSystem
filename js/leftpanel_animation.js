$(document).ready(function(){
    $(".hb_leftPM").click(leftPanel);//點擊漢堡圖
    $(".hb_leftPMHi").click(leftPanelHi);//點擊漢堡圖

    $(".edenlpHiA").click(leftPanelHiInside);

    $(window).resize(function() {//判斷視窗大小 顯示菜單和隱藏菜單

        $(".hb_leftPM").addClass("fa-bars");
        $(".hb_leftPM").removeClass("fa-close");
        $(".hb_leftPMHi").addClass("fa-bars");
        $(".hb_leftPMHi").removeClass("fa-close");
        
        var wdth=$(window).width();
        if(wdth>=768){
            $(".leftPanel span").hide();
            $(".leftPanel").show();

            $(".leftPanelHi > li").hide();//第二個
            $(".leftPanelHi").show();//第二個
        }
        if(wdth<768){
            $(".leftPanel span").show();
            $(".leftPanel").hide();

            $(".leftPanelHi > li").show();//第二個
            $(".leftPanelHi").hide();//第二個
        }
    });
});

function leftPanel(){

    $(".hb_leftPM").toggleClass("fa-bars");
    $(".hb_leftPM").toggleClass("fa-close");

    var wdth=$(window).width();
    if(wdth>=768){
        $(".leftPanel span").stop().toggle(300);
    }
    if(wdth<768){
        $(".leftPanel span").show();
        $(".leftPanel").stop().slideToggle(300);
    }
}

function leftPanelHi(){
    $(".hb_leftPMHi").toggleClass("fa-bars");
    $(".hb_leftPMHi").toggleClass("fa-close");

    var wdth=$(window).width();
    if(wdth>=768){
        $(".leftPanelHi > li").stop().toggle(300);
        $(".leftPanelHi").show();
    }
    if(wdth<768){
        $(".leftPanelHi > li").show();
        $(".leftPanelHi").stop().slideToggle(300);
    }
}

function leftPanelHiInside(){
    $(this).next().stop().slideToggle(200);
}