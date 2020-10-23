
//垂直 v3 tab版
var total = $(".v3LTab1").length+$(".v3LTab2").length;
var mole = 1;

$(document).ready(function(){

    //tab版 通用切換頁面功能除了v3
    $("#edenTabs a").click(showEdenTabsPage);

    //垂直 v3 tab版
    $(".btV3_pageUp").click(btV3_pageUp).css("visibility","hidden");
    $(".btV3_pageDown").click(btV3_pageDown);
    var percent = (mole/total)*100+"%";
    $(".edenTabsV3Line").css({
        "height":percent,
    });
});

//tab版 通用切換頁面功能 除了v3
function showEdenTabsPage(){
    var value=$(this).attr("href");//#1
    console.log(value);
    $("#edenTabsSub>div").hide();//隱藏所有頁面
    $(value).show();//顯示不同頁面
    $("#edenTabs .tab1").removeClass("tab1").addClass("tab2");
    $(this).removeClass("tab2").addClass("tab1");
}


//垂直 3 tab版 上一步
function btV3_pageUp(){
    $(".btV3_pageDown").css("visibility","visible");//點選上一步 時 下一步就會出現
    if(mole>1){
        mole-=1;
        var percent = (mole/total)*100+"%";
        $(".edenTabsV3Line").animate({
            "height":percent,
        },300);
        $(".v3LTab1").removeClass("v3LTab1").addClass("v3LTab2");
        $(".edenTabsV3Title div:eq("+(mole-1)+")").removeClass("v3LTab2").addClass("v3LTab1");
        $(".v3RTab1").removeClass("v3RTab1").addClass("v3RTab2");
        $(".edenTabsV3Right div:eq("+(mole-1)+")").removeClass("v3RTab2").addClass("v3RTab1");

    }
    if(mole==1){
        $(".btV3_pageUp").css("visibility","hidden");//回到一開始時 上一步就會隱藏
    }
}

//垂直 3 tab版 下一步
function btV3_pageDown(){
    $(".btV3_pageUp").css("visibility","visible");//點選下一步 時 上一步就會出現
    if(mole<total){
        mole+=1;
        var percent = (mole/total)*100+"%";
        $(".edenTabsV3Line").animate({
            "height":percent,
        },300);
        $(".v3LTab1").removeClass("v3LTab1").addClass("v3LTab2");
        $(".edenTabsV3Title div:eq("+(mole-1)+")").removeClass("v3LTab2").addClass("v3LTab1");
        $(".v3RTab1").removeClass("v3RTab1").addClass("v3RTab2");
        $(".edenTabsV3Right div:eq("+(mole-1)+")").removeClass("v3RTab2").addClass("v3RTab1");

    }
    if(mole==total){
        $(".btV3_pageDown").css("visibility","hidden");//走到最後時 下一步就會隱藏
    }
}