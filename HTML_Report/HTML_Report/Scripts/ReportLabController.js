function findDistinctCourse(parsed)
{
    var flags = [], distinctCourse = [], l = parsed.length, x;
    var StGPA = []; FlagStGpa = []; Flag2 = []; uniqueRegName = [];
    var summary = [];
    for (x = 0; x < l; x++) {
        if (flags[parsed[x].Course]) continue;
        flags[parsed[x].Course] = true;
        distinctCourse.push(parsed[x]);
    }
    return distinctCourse;
}

function findDistinctStudent(parsed) {
    var flags = [], distinctStudent = [], l = parsed.length, x;
    var StGPA = []; FlagStGpa = []; Flag2 = []; uniqueRegName = [];
    var summary = [];
    for (x = 0; x < l; x++) {
        if (flags[parsed[x].Roll]) continue;
        flags[parsed[x].Roll] = true;
        distinctStudent.push(parsed[x]);
    }

    return distinctStudent;
}

function findDistinctAssesment(parsed) {
    var flags = [], distinctAssesment = [], l = parsed.length, x;
    var StGPA = []; FlagStGpa = []; Flag2 = []; uniqueRegName = [];
    var summary = [];
    for (x = 0; x < l; x++) {
        if (flags[parsed[x].Evaluation]) continue;
        flags[parsed[x].Evaluation] = true;
        distinctAssesment.push(parsed[x]);
    }

    return distinctAssesment;
}


function FormCssString() {
    var CssString = "";
    CssString += 'div.header {display:s block;position:fixed;}  #newPage{page-break-before: always;}  #customers{page-break-inside:auto;font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;font-size:14px;border-collapse: collapse;';
    CssString += 'width:100%;}#customers thead{}#customers td{border: 1px solid rgb(0,0,0);padding: 2px; } #customers th {border: 1px solid rgb(0,0,0);';
    CssString += 'padding:4px; text-align: center; background-color: grey;} #customers td{text-align:center;}';
    CssString += '#customers  tr.noBorderRow { border: 0;font-size:20px;} #customers  td.noBorderFoot { border: 0;font-size:20px;} ';
    CssString += '#customers  th.noBorder { border: 0;font-size:20px;} #customers td.t{text-align:center;} ';
    CssString += '#customers td.crcl{width: 20px; height: 20px;border: 2px solid rgb(0,0,0);margin-left:20px;border-radius: 50%; font-size: 12px;color: black; line-height: 20px;text-align:center;}';
    CssString += ' #customers tr:nth-child(even) {  background-color: white;}';
    CssString += 'p.Logo{padding-left: 40px; }'
    CssString += '#customers tr {page-break-after:auto}#customers tr:hover {backgrosund-color: white;}  .footer {position: fixed;  bottom: 0;} .header2 {position: fixed;  top: 0;}';
    CssString += '.colBk {background-color: #1a4567; -webkit-print-color-adjust:exact !important;}';
    CssString += '</style></head><body>';

    return CssString;

}

function FormUpperContent() {
    var upperContent = "";

    upperContent += "<div class='row' style='padding-top:100px;padding-bottom:30px;'>";
    upperContent += "<div class='col-sm-5'></div>";
    upperContent += "<div class='col-sm-4' style='font-weight:bold;font-size:16px;'>Edusoft HTML Report Workshop </div>";
    upperContent += "<div class='col-sm-3'></div></div>";

    return upperContent;
}


function FormFooterContent(PageNum) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '.' + mm + '.' + yyyy;
    var footerContent = ""
    footerContent += "<div class='row' style='padding-top:25px;'>";
    footerContent += "<div class='col-sm-2'>" + "</div>";

    footerContent += "<div class='col-sm-3' style='padding-left:55px;'>" + "Date: " + today + "</div>";
    footerContent += "<div class='col-sm-1'>" + "</div>";
    footerContent += "<div class='col-sm-3'>" + "" + "</div>";
    footerContent += "<div class='col-sm-3'>" + "Page No - " + PageNum + "</div></div>";



    return footerContent;


}



//===========You have to complete following function. You can pass any argument in the function according
//=========== to your necessity.========================================================================


function FormTableHeader()
{
    
}




//===========You have to complete following function. You can pass any argument in the function according
//=========== to your necessity.========================================================================

function makeResultTable()
{
     
}


function PrintReport()
{
    var jsonList = getJSONObject();
            
    var mywindow = window.open('', 'PRINT', 'height=' + 800 + ',width=' + 1600);
    var startHead = '<html><head> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"><style>';

    mywindow.document.write(startHead);
    mywindow.document.write(FormCssString());

    //You will call makeResultTable function here to complete your report............

    mywindow.document.write('</body></html>');


    
    mywindow.document.close();
    mywindow.focus();

             
}

