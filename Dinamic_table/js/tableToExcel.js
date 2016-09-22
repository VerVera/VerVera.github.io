/**
 * Created by koste on 22.09.2016.
 */
var tableToExcel = (function () {
    var uri = 'data:application/vnd.ms-excel,' + '\uFEFF'
        , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table1}</table><table>{table2}</table><table>{table3}</table></body></html>'
        , base64 = function (s) {
        return encodeURIComponent(s)
    }
        , format = function (s, c) {
        return s.replace(/{(\w+)}/g, function (m, p) {
            return c[p];
        })
    }
    return function (table1, table2, table3, name) {
        if (!table1.nodeType) table1 = document.getElementById(table1)
        if (!table2.nodeType) table2 = document.getElementById(table2)
        if (!table3.nodeType) table3 = document.getElementById(table3)
        var ctx = {
            worksheet: name || 'Worksheet',
            table1: table1.innerHTML,
            table2: table2.innerHTML,
            table3: table3.innerHTML
        }
        window.location.href = uri + base64(format(template, ctx))
    }
})();
