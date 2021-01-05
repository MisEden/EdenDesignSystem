$(document).ready(function(){
    windowsWidthChange();
    //視窗大小變化時
    $(window).resize(windowsWidthChange);
    //點選遮罩或手機畫面時的x 進行開關
    $(".edenMask").click(tableDetailMask);
    $(".tableDetailClose").click(tableDetailMask);
    //點選偶數的列表時
    $(".ExpandableTable tbody tr:even").click(tableDetail);
});

function tableDetail(){
    var wdth=$(window).width();//取得目前瀏覽器視窗寬度。 $(window).height() 高度
    if(wdth<768){
        $(".edenMask").toggle();//遮罩開關
    }
    
    $(this).next(".tableDetail").find("td").stop().slideToggle();
    $(this).next(".tableDetail").find("td").find("div").slideToggle();
}
function tableDetailMask(){
    $(".edenMask").hide();//遮罩開關
    $(".tableDetail").find("td").stop().hide();
    $(".tableDetail").find("td").find("div").hide();
}

//更換checkbox的圖示
function changeImg(obj) {

    var id =$(obj).attr("id").split('_');//將id拆成陣列 取後面
    var img_src = $("#chkImg_" + id[1]).attr("src");//取得圖片路徑

    if(img_src == "../images/svg/checkbox_selected.svg"){//如果是勾選的話
        $("#chkImg_" + id[1]).attr("src", "../images/svg/checkbox.svg");//更換成取消勾選的圖片
        $("#chkInput_" + id[1]).attr("checked", false);//更換原本的checkbox為取消勾選
    }else{
        $("#chkImg_" + id[1]).attr("src", "../images/svg/checkbox_selected.svg");
        $("#chkInput_" + id[1]).attr("checked", "checked");
    }

}

function windowsWidthChange(){
    var wdth=$(window).width();//取得目前瀏覽器視窗寬度。 $(window).height() 高度
    if(wdth>=768){
        tableDetailMask();
        $(".tableDelete").html("<i class='fa fa-trash'></i>刪除");
        $(".tableDownload").html("<i class='fa fa-cloud-download'></i>下載");
        $(".tableUpdate").html("<i class='fa fa-save'></i>儲存");
        $(".tableCancel").html("<i class='fa fa-close'></i>取消");
        $(".tableInsert").html("新增");
    }
    if(wdth<768){
        $(".tableDelete").html("<i class='fa fa-trash'></i>");
        $(".tableDownload").html("<i class='fa fa-cloud-download'></i>");
        $(".tableUpdate").html("<i class='fa fa-save'></i>");
        $(".tableCancel").html("<i class='fa fa-close'></i>");
        $(".tableInsert").html("<i class='fa fa-plus'></i>");
    }
}

var edenMultiTable; //表格變數
function edenMultiTable(tableData) {
    edenMultiTable = new Vue({
        el: ".edenMultiTable",
        data: {
            isCheckedAll: false,
            selected: [],
            tableData: []
        },
        //監聽器 檢查選擇的項目 不為0 則顯示
        watch: {
            selected: function (newdata, olddata) {

                if (edenMultiTable.selectNum != 0) {
                    $(".tableBar div").animate({
                        top: '0px'
                    });
                } else {
                    $(".tableBar div").animate({
                        top: '40px'
                    });
                }
            }
        },
        //自訂屬性 被選了幾個項目
        computed: {
            selectNum: function () {//統計被選了幾個項目
                return this.selected.length;
            },
            checkedArray: function () {//為了要應對打勾時 class關閉還是開啟
                let array = [];
                this.tableData.forEach((valTable, index) => {
                    array.push(true);
                });
                return array;
            }
        },
        methods: {
            checked: function (index) {
                
                this.checkedArray[index] = !this.checkedArray[index];//打勾就把陣列中的true改false
            },
            checkedAll: function () {
                $("#chkInput_0").attr("checked", "checked");//更換原本的checkbox為取消勾選
                this.isCheckedAll = !this.isCheckedAll;
                if (this.isCheckedAll) { //全選時
                    this.selected = this.tableData;//將所有資料放入勾選資料陣列
                    this.checkedArray.forEach((valTable, index) => {
                        this.checkedArray[index] = false;//將勾選陣列都改為false 為了input的開關
                        $("#chkImg_" + index).attr("src", "../images/svg/checkbox_selected.svg");//將所有checkbox的圖片改為勾選的圖片
                    });
                } else { //全部取消選擇時
                    this.selected = [];//將勾選資料陣列清除
                    this.checkedArray.forEach((valTable, index) => {
                        this.checkedArray[index] = true;//將勾選陣列都改為true 為了input的開關
                        $("#chkImg_" + index).attr("src", "../images/svg/checkbox.svg");//將所有checkbox的圖片改為取消勾選的圖片
                    });
                }
            },
            tableInsert:tableInsert,
            tableDelete:tableDelete,
            tableDownload: tableDownload,
            tableUpdate: tableUpdate,
            tableCancel: clearSelect
        }
    });

    edenMultiTable.$data.tableData = tableData;//將資料帶入

    $(".tableUpdate").click(clearSelect);//不能被複寫的更新行為
    $(".tableDelete").click(clearSelect);//不能被複寫的刪除行為
}

//刪除或取消或更新 都必須將所選重新清除 
function clearSelect(){
    edenMultiTable.$data.isCheckedAll = false;//清除全選
    edenMultiTable.$data.selected = [];//清除所選
    edenMultiTable.checkedArray.forEach((valTable, index) => {//清除所選的陣列
        edenMultiTable.checkedArray[index] = true;
        $("#chkImg_" + index).attr("src", "../images/svg/checkbox.svg");//將所有checkbox的圖片改為取消勾選的圖片
    });
}

//新增資料
function tableInsert(){
    // $.ajax({
    //     url:"",
    //     typr:"POST",
    //     data:"",
    //     contenType:"application/json charset=utf-8",
    //     success:function(data){
    //         alert("request Success!"+data);
    //         edenMultiTable.$data.tableData.push(data);
    //     },
    //     error : function() { 
    //         alert("異常！"); 
    //     } 
    // });
    edenMultiTable.$data.tableData.push({
        id: 0,
        user: "",
        height: 0,
        weight: 0
    });
}

//刪除資料
function tableDelete(){
    // $.ajax({
    //     url:"",
    //     typr:"DELETE",
    //     data:edenMultiTable.$data.selected,
    //     contenType:"application/json charset=utf-8",
    //     success:function(data){
    //         alert("request Success!"+data);
    //         let newData = [];
    //         this.tableData.forEach((valTable, index) => {
    //             if (!(this.selected.indexOf(valTable) > -1)) {
    //                 newData.push(valTable);
    //             }
    //         });

    //         this.tableData = newData;
    //         this.selected = [];
    //         this.isCheckedAll = false;
    //     },
    //     error : function() { 
    //         alert("異常！"); 
    //     } 
    // });
        let newData = [];
        this.tableData.forEach((valTable, index) => {
            if (!(this.selected.indexOf(valTable) > -1)) {
                newData.push(valTable);
            }
        });

        this.tableData = newData;
        this.selected = [];
        this.isCheckedAll = false;
}

//下載資料
function tableDownload(){
    $.ajax({
        url:"",
        typr:"POST",
        data:"",
        contenType:"application/json charset=utf-8",
        success:function(data){
            alert("request Success!"+data);
        },
        error : function() { 
            alert("異常！"); 
        } 
    });
}

//儲存資料
function tableUpdate(){
    $.ajax({
        url:"",
        typr:"PUT",
        data:edenMultiTable.$data.selected,
        contenType:"application/json charset=utf-8",
        success:function(data){
            alert("request Success!"+data);
        },
        error : function() { 
            alert("異常！"); 
        } 
    });
}