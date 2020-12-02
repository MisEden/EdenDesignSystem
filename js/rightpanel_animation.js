var flag=true;//釘子功能 將右邊彈出視窗固定
$(document).ready(function(){

    //用於Form.html
    $(".bt_rightPanel").click(rightPanel);
    $(".rp_Form form .fa-close").click(rightPanel);
    $(".edenMask").click(rightPanel);//點擊遮罩畫面時 開關右側菜單

    //用於ToDoList.html
    $(".bt_rightPanel2").click(rightPanel);
    $(".rp_toDoList .fa-close").click(rightPanel);//開關右側菜單
    $(".rp_target").click(rightPanelList);//點擊目標項目時 把菜單全部顯示 只用於手機板
    $(".rp_title .fa-thumb-tack").click(stopRightPanel);//釘子功能 將右邊彈出視窗固定

    $(window).resize(function() {//判斷視窗大小 顯示菜單和隱藏菜單
        if(flag){
            var wdth=$(window).width();
            if(wdth>=768){//電腦畫面
                flag=true
                $(".rp_content div").show();//顯示選擇以外的選項內容 配合手機介面
                $(".rp_toDoList ul").hide();//隱藏最外層框 配合電腦介面

                
                $(".bt_rightPanel2").show();//隱藏開啟按鈕
            }   
            if(wdth<768){//手機畫面
    
                $(".rp_content div").hide();//隱藏選擇以外的選項內容 配合手機介面
                $(".rp_toDoList ul").show();//顯示最外層框 配合電腦介面

                $(".bt_rightPanel2").hide();//隱藏開啟按鈕
            }
        }
    });
});

//右邊視窗的電腦版和手機板的 隱藏和顯示 通用
function rightPanel(){
    if(flag){
        $(".edenMask").toggle();//遮罩開關

        var wdth=$(window).width();
        if(wdth>=768){
            $(".rp_Form form").toggle(300);
            $(".rp_Form .edenFooter").toggle(300);

            $(".rp_toDoList ul").toggle(300);
        }else if(wdth<768){
            $(".rp_Form form").slideToggle(300);
            $(".rp_Form .edenFooter").slideToggle(300);
        }
    }
    
}

//搭配ToDoList的手機板 的菜單 隱藏和顯示
function rightPanelList(){
    if(flag){
        var wdth=$(window).width();
        if(wdth<768){
            $(".rp_content div").slideToggle(300);//顯示隱藏選擇以外的選項內容 配合手機介面
        }
    }
}

//釘子功能 將右邊彈出視窗固定
function stopRightPanel(){
    if(flag){
        $(".bt_rightPanel2").hide();//隱藏開啟按鈕
        $(".fa-close").hide();
        flag=false;
    }else{
        $(".bt_rightPanel2").show();//隱藏開啟按鈕
        $(".fa-close").show();
        flag=true;
    }

}