//垂直 v3 tab版
//var total = $(".v3LTab1").length+$(".v3LTab2").length;//總共幾個項目
//var mole = 1;//第一個項目

//水平 tab版
var total = $(".stepOn").length+$(".stepOff").length;//總共幾個項目
var mole = 1;//第一個項目

$(document).ready(function(){

    //tab版 通用切換頁面功能除了v3
    $("#edenTabs a").click(showEdenTabsPage);


    //水平 隨機版
    $(".btStepUp").click(btStepUp).css("visibility","hidden");
    $(".btStepDown").click(btStepDown);

    //水平 步驟版 根據視窗大小 上方按鈕切換 一開始
    $(window).resize(stepBtResize);
    stepBtResize("down");

    //tab垂直版 V2的切換頁面 因為手機板和其他不同 故獨立做
    $("#edenTabsV2 a").click(showEdenTabsPageV2);
    $(".edenTabsV2Button i").click(edenTabsV2Button);//垂直版 按鈕彈出選單
    $(window).resize(edenTabsV2Resize);
    edenTabsV2Resize();

    //垂直 v3 tab版
    $(".btV3_pageUp").click(btV3_pageUp).css("visibility","hidden");
    $(".btV3_pageDown").click(btV3_pageDown);
    var percent = (mole/total)*100+"%";
    $(".edenTabsV3Line").css({
        "height":percent,
    });
    
    
});

//tab版 通用切換頁面功能 除了v2和V3
function showEdenTabsPage(){

    var tops = $(document).scrollTop();

    var value=$(this).attr("href");//#1
    console.log(value);
    
    $(".edenTabsSub>div").hide();//隱藏所有頁面
    $(".edenFormSubmit").show();//顯示按鈕頁

    $(value).show();//顯示不同頁面

    //左邊按鈕的頁簽切換
    $("#edenTabs .tab1").removeClass("tab1");
    $(this).addClass("tab1");

    $(document).ready(function(){
        $(document).scrollTop(tops);
    }).stop();

}

//步驟版 手機板縮小時 根據視窗大小 上方按鈕切換
function stepBtResize(action){
    var wdth=$(window).width();//取得目前瀏覽器視窗寬度。 $(window).height() 高度
    if(wdth<768){//如果是手機視窗 每次都顯示該步驟 先刪除
        $(".edenTabsHSTitle >div").removeClass("stepOn").addClass("stepOff");
        $(".edenTabsHSTitle >div:eq("+(mole-1)+")").addClass("stepOn").removeClass("stepOff");
        $(".btStepDown").html("<i class='fa fa-chevron-right'></i>");
    }else{
        $(".btStepDown").html("下一步");
    }
    if(action=="up"){
        $(".edenTabsHSTitle >div:eq("+(mole)+") span").css({
            "background-image":"url(../css/tabs/img/灰色圓形.svg)"
        });
    }
    if(action=="down"){
        $(".edenTabsHSTitle >div:eq("+(mole-1)+") span").css({
            "background-image":"url(../css/tabs/img/橘色圓形.svg)"
        });
    }
}

//水平 tab版 下一步
function btStepDown(){
    $(".btStepUp").css("visibility","visible");//點選下一步 時 上一步就會出現

    if(mole<total){//如果沒有到最後一步

        //先執行將圖示換成打勾 之後
        //$(".stepOn:last span").html("<i class='fa fa-check'></i>");
        $(".edenTabsHSTitle >div:eq("+(mole-1)+") span").html("<i class='fa fa-check'></i>");

        $(".edenTabsHSTitle >div:eq("+(mole)+")").removeClass("stepOff").addClass("stepOn");
        //下方頁面的切換
        $(".tab1").removeClass("tab1");
        $(".edenTabsSub >div:eq("+(mole)+")").addClass("tab1");

        //計算百分比 將線拉長
        mole+=1;
        var percent = (mole/total)*100+"%";
        $(".edenTabsHSLine").animate({
            "width":percent,
        },300);
    }

    if(mole==total){//如果已經是最後一步
        $(".btStepDown").css("visibility","hidden");//走到最後時 下一步就會隱藏
    }

    stepBtResize("down");

}

//水平 tab版 上一步
function btStepUp(){
    $(".btStepDown").css("visibility","visible");//點選上一步 時 下一步就會出現
    if(mole>1){//如果是第二步之後

        //計算百分比 將線縮短
        mole-=1;
        var percent = (mole/total)*100+"%";
        $(".edenTabsHSLine").animate({
            "width":percent,
        },300);

        //上方按鈕切換 數字 將數字帶入
        $(".edenTabsHSTitle >div:eq("+(mole-1)+") span").text(mole);
        $(".edenTabsHSTitle >div:eq("+(mole)+")").removeClass("stepOn").addClass("stepOff");

        //下方頁面的切換
        $(".tab1").removeClass("tab1");
        $(".edenTabsSub div:eq("+(mole-1)+")").addClass("tab1");
    }
    if(mole==1){//如果是第一步
        $(".btStepUp").css("visibility","hidden");//回到一開始時 上一步就會隱藏
    }

    stepBtResize("up");
}

//垂直 tab版 彈出選單
function edenTabsV2Button(){
    $(".edenTabsV2Left").toggle();
    $(".edenMask").toggle();
}

//tab 垂直版 V2切換頁面功能 因為手機板狀況不同 獨立做
function showEdenTabsPageV2(){

    var tops = $(document).scrollTop();

    var value=$(this).attr("href");//#1
    console.log(value);
    
    $(".edenTabsSub>div").hide();//隱藏所有頁面
    $(".edenFormSubmit").show();//顯示按鈕頁

    $(value).show();//顯示不同頁面

    //左邊按鈕的頁簽切換
    $("#edenTabsV2 .tab1").removeClass("tab1");
    $(this).addClass("tab1");

    $(document).ready(function(){
        $(document).scrollTop(tops);
    }).stop();

    edenTabsV2Resize();
}

//tab 垂直版 
function edenTabsV2Resize(){
    var wdth=$(window).width();//取得目前瀏覽器視窗寬度。 $(window).height() 高度
    if(wdth<768){//如果是手機視窗 每次都顯示該步驟 先刪除
        $(".edenTabsV2Left").hide();
        $(".edenMask").hide();
    }else{
        $(".edenTabsV2Left").show();
        $(".edenMask").hide();
    }
}

//垂直 3 tab版 上一步
function btV3_pageUp(){
    $(".btV3_pageDown").css("visibility","visible");//點選上一步 時 下一步就會出現
    if(mole>1){//如果是第二步之後
        mole-=1;
        var percent = (mole/total)*100+"%";
        $(".edenTabsV3Line").animate({
            "height":percent,
        },300);
        $(".stepOn").removeClass("stepOn").addClass("stepOff");
        $(".edenTabsV3Title div:eq("+(mole-1)+")").removeClass("stepOff").addClass("stepOn");
        $(".v3RTab1").removeClass("v3RTab1").addClass("v3RTab2");
        $(".edenTabsV3Right div:eq("+(mole-1)+")").removeClass("v3RTab2").addClass("v3RTab1");

    }
    if(mole==1){//如果是第一步
        $(".btV3_pageUp").css("visibility","hidden");//回到一開始時 上一步就會隱藏
    }
}

//垂直 3 tab版 下一步
function btV3_pageDown(){
    $(".btV3_pageUp").css("visibility","visible");//點選下一步 時 上一步就會出現
    if(mole<total){//如果沒有到最後一步
        mole+=1;
        var percent = (mole/total)*100+"%";
        $(".edenTabsV3Line").animate({
            "height":percent,
        },300);
        $(".stepOn").removeClass("stepOn").addClass("stepOff");
        $(".edenTabsV3Title div:eq("+(mole-1)+")").removeClass("stepOff").addClass("stepOn");
        $(".v3RTab1").removeClass("v3RTab1").addClass("v3RTab2");
        $(".edenTabsV3Right div:eq("+(mole-1)+")").removeClass("v3RTab2").addClass("v3RTab1");

    }
    if(mole==total){//如果已經是最後一步
        $(".btV3_pageDown").css("visibility","hidden");//走到最後時 下一步就會隱藏
    }
}
