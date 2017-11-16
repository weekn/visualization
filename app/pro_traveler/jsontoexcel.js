var  dataToExportJson=function(dataArray,dataColumns,exportColumns,formatColumns){
    if(dataColumns.length != exportColumns.length){
        return null;
    }
    let exportDataArg = [];
    //遍历原数组
    for(let j = 0;j<dataArray.length;j++){
        let tempObject = {};
        //遍历对象，拿到对象属性
        for(let i = 0;i<dataColumns.length;i++){
            let tempData = dataArray[j][dataColumns[i]];
            if(formatColumns){
                //判断是否需要格式转换
                if(formatColumns[i] != null && formatColumns[i] != ""){
                    tempData = formatColumns[i](tempData);
                }
            }
            tempObject[exportColumns[i]] = tempData;
        }
        exportDataArg.push(tempObject);
    }
    return exportDataArg;
    };

    var JSONToCSVConvertor=function(JSONData, ReportTitle, ShowLabel) {
        var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
        var fileName = "";
        fileName += ReportTitle.replace(/ /g,"_") + "报表数据";
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
        var CSV = 'data:text/csv;charset=utf-8,\ufeff';
        if(isIE){
            CSV = '\ufeff';
        }
        CSV += ReportTitle + '\r\n\n';
        if (ShowLabel) {
            var row = "";
            for (var index in arrData[0]) {
                row += index + ',';
            }
            row = row.slice(0, -1);
            CSV += row + '\r\n';
        }
        for (var i = 0; i < arrData.length; i++) {
            var row = "";
            for (var index in arrData[i]) {
                row += '"' + arrData[i][index] + '",';
            }
            row.slice(0, row.length - 1);
            CSV += row + '\r\n';
        }
        if (CSV == '') {
            alert("Invalid data");
            return;
        }
        //IE只能使用Blob文件下载，不支持URI，详见:
        //https://technet.microsoft.com/ZH-CN/Library/hh779016.aspx
        if(isIE){
            var blob = new Blob([decodeURIComponent(encodeURI(CSV))], {
                type: "text/csv;charset=utf-8;"
            });
            window.navigator.msSaveBlob(blob, fileName + ".csv")
        }
        else{
            var link = document.createElement("a");
            link.href = encodeURI(CSV);
            link.style = "visibility:hidden";
            link.download = fileName + ".csv";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };
    