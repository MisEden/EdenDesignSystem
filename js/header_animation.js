$(document).ready(function(){
    $("#edenSurchOpenClose").click(edenSurchOpenClose);
    edenSurchCss();//第一次執行先隱藏 搜尋框
    edenUserData();
    $(".edenUserData i").click(edenUserAnimate);
    $(".hamburger").click(edenMenuAnimate);
    $(".sub").hide();
    $(window).resize(function() {//判斷視窗大小 顯示菜單和隱藏菜單
        var wdth=$(window).width();
        if(wdth>=768){
            $(".edenMenu").show().stop();
        }
        if(wdth<768){
            $(".edenMenu").hide().stop();
        }
    });
});

//使用者資料
function edenUserData(){
    $("#edenUserData").hover(function(){
        $(this).find(".sub").stop().slideToggle(200);//包含後面的.sub物件
    });
}


//第一次執行先隱藏 搜尋框 以及hover效果
function edenSurchCss(){
    $("#edenSurchSubmit").stop().animate({
        width:'toggle'
    });
    $("#edenSearch").stop().animate({
        width:'toggle'
    });
}

//第二次之後 按一下顯示按一下隱藏 按一下灰色 按一下黑色
function edenSurchOpenClose(){
    $("#edenSurchSubmit").stop().animate({
        width:'toggle'
    },300);
    $("#edenSearch").stop().animate({
        width:'toggle'
    },300);
    if($("#edenSurchOpenClose").hasClass("fa-search")){
        $(this).removeClass("fa-search").addClass("fa-close");
        $(".edenSurchBar").css({
            "background-color":"#757575",
        });
    }else{
        $(this).removeClass("fa-close").addClass("fa-search");
        $(".edenSurchBar").css({
            "background-color":"#555555",
        });
        // $(".edenSurchBar").hover(
        //     function(event){
        //         $(this).css({
        //             "background-color":"#757575",
        //         });
        //     },
        //     function(event){
        //         $(this).css({
        //             "background-color":"#555555",
        //         });
        //     }
        // );
    }
}

//使用者訊息動畫
function edenUserAnimate(){
    $(".sub").animate({
        height:'toggle'
    });
}

//菜單動畫
function edenMenuAnimate(){
    $(".edenMenu").animate({
        height:'toggle',
    });
}