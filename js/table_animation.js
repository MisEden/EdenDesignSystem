
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
                this.isCheckedAll = !this.isCheckedAll;
                if (this.isCheckedAll) { //全選時
                    this.selected = this.tableData;
                    this.checkedArray.forEach((valTable, index) => {
                        this.checkedArray[index] = false;
                    });
                } else { //全部取消選擇時
                    this.selected = [];
                    this.checkedArray.forEach((valTable, index) => {
                        this.checkedArray[index] = true;
                    });
                }
            },
            tableDelete: function () {
                // let newData = [];
                // this.tableData.forEach((valTable, index) => {
                //     if (!(this.selected.indexOf(valTable) > -1)) {
                //         newData.push(valTable);
                //     }
                // });

                // this.tableData = newData;
                // this.selected = [];
                // this.isCheckedAll = false;
            },
            tableDownload: function () {

            },
            tableUpdate: function () {

            },
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
    });
}