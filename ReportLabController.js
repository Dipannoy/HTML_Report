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
    //distinctStudent.sort((a, b) => (a.Roll < b.Roll) ? 1 : -1)

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
    //distinctStudent.sort((a, b) => (a.Roll < b.Roll) ? 1 : -1)

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
    //@media print{.box-text { font-size: 27px !important; color: blue !important;-webkit-print-color-adjust: exact !important;}

    CssString += '</style></head><body>';


    //mywindow.document.write('@media print #customers {backgrosund-color: grey; -webkit-print-color-adjust: exact !important;}');

    // mywindow.document.write('#customers th {');


    return CssString;

}
function FormTableHeader(disCourseList, disAssesmentList)
{
    var middleContent = "";

    middleContent += "<div class='row' style='padding-top:10px;'>";
    middleContent += "<div class='col-sm-1'></div>";
    middleContent += "<div class='col-sm-10'>";
    middleContent += "<table id='customers'><thead>";
    middleContent += "<tr><th rowspan='3'>SL No</th>";
    middleContent += "<th rowspan='3'> Roll </th>";
    middleContent += "<th rowspan='3'> Name</th>";
    middleContent += "<th colspan='" + (disAssesmentList.length) + "'> Assesment</th>";
    middleContent += "<th colspan='" + (disCourseList.length * 2) + "'>" + "Course" + "</th>";
          
    middleContent += "<th rowspan='3'> Average GPA</th>";
    middleContent += "<th rowspan='3'> Remarks</th>";
          



    middleContent += "</tr><tr>";
    for (var i = 0; i < disAssesmentList.length; i++)
    {
        middleContent +=  "<th rowspan='" + 2 + "'>"+disAssesmentList[i].Evaluation +"</th>";

    }

    for (var i = 0; i < disCourseList.length; i++)
    {
        middleContent +=  "<th colspan='" + 2 + "'>"+disCourseList[i].Course +"</th>";

    }
    middleContent += "</tr><tr>";
    for (var i = 0; i < disCourseList.length; i++)
    {
        middleContent +=  "<th>"+"Grade" +"</th>";
        middleContent +=  "<th>"+"GPA" +"</th>";

    }

    middleContent += "</tr></thead>" + "<tbody>";
    return middleContent;
}

function FormUpperContent()
{
    var upperContent = "";
             
    upperContent += "<div class='row' style='padding-top:100px;padding-bottom:30px;'>";
    upperContent += "<div class='col-sm-5'></div>";
    upperContent += "<div class='col-sm-4' style='font-weight:bold;font-size:16px;'>Edusoft HTML Report Workshop </div>";
    upperContent += "<div class='col-sm-3'></div></div>";

             
    //upperContent += '</div>'

    //upperContent +='<p class="b" style="font-weight:bold;">'+"BSS in Economy"+'</p></div></div>';
    //upperContent += '<div class="row"><div class = "col-sm-5" style=""><p class="b" style="line-height:8px;font-weight:bold;margin-top:3px;">'+ "1st Yesr 1st Semester" +'</p></div><div class = "col-sm-7" style="font-size:14px;font-weight:bold;padding-left:0px;padding-top:0px;" >Result Sheet</div></div>';
                    
    //upperContent += '<div class="row"><div class = "col-sm-6" style=""><p class="b" style="line-height:5px;font-weight:bold;">Final Exam 2010</p></div><div class = "col-sm-6"></div></div>';
    return upperContent;
}


function FormFooterContent(PageNum)
{
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '.' + mm + '.' + yyyy;
    var footerContent = ""
    footerContent += "<div class='row' style='padding-top:25px;'>";
    footerContent += "<div class='col-sm-2'>" +  "</div>";

    footerContent += "<div class='col-sm-3' style='padding-left:55px;'>" + "Date: "+today  + "</div>";
    footerContent += "<div class='col-sm-1'>" +  "</div>";
    footerContent += "<div class='col-sm-3'>" + "" + "</div>";
    footerContent += "<div class='col-sm-3'>" + "Page No - " + PageNum+"</div></div>";

           

    return footerContent;


}


function makeResultTable(parsed)
{
    var disCourseList = findDistinctCourse(parsed);
    var disStudentList = findDistinctStudent(parsed);
    var disAssesmentList = findDistinctAssesment(parsed);
    var totalColumn = (disCourseList.length * 2) + 2;
             

    var middleContent = "";
    var page = 0;
    var remarks = "";
    var totalGPA = 0;
    var avgGPA = 0;
    var totalCourse = 0;
    var perPageGood = 0;
    var perPageAverage = 0;
    var allPageGood = 0;
    var allPageAverage = 0;
    var perPageMark = [];
    var totalPageMark = [];
    var tableHeader = FormTableHeader(disCourseList, disAssesmentList);
    var upperContent =  FormUpperContent();
    //var footerContent = FormFooterContent();
    middleContent += upperContent;
    middleContent += tableHeader;
          
            
    for (var y = 0; y<disAssesmentList.length; y++)
    {
        perPageMark.push(0);
        totalPageMark.push(0);
    }
    for (var i = 0; i < disStudentList.length; i++)
    {
                  
        var studentFilterList = parsed.filter(x=>x.Roll ==  disStudentList[i].Roll);
        var rowSpan = studentFilterList.length;
        totalGPA = 0;
        totalCourse = 0;
        avgGPA = 0;

        if(i % 4 == 0 && i != 0 )
        {
            page++;

            middleContent += "<tr>";
            middleContent += "<td colspan='"+ 3 +"'>Sub Total</td>";
            for(var p=0; p<perPageMark.length; p++)
            {
                middleContent += "<td>"+perPageMark[p] +"</td>";
                perPageMark[p] = 0;
            }
            middleContent += "<td colspan='"+ totalColumn+"'></td>";

            middleContent += "</tr>";
            middleContent += "</tbody></table>";
                    

            middleContent += "</div><div class='col-sm-1'></div></div>";
            middleContent += FormFooterContent(page);
            if(page>1)
            {
                middleContent += "</div>";
            }
            middleContent += "<div id='newPage'>";
            middleContent += upperContent;

            middleContent += tableHeader;
            perPageGood = 0;
            perPageAverage = 0;
        }

        middleContent += "<tr>";
        middleContent += "<td>" + (i + 1) + "</td>";
        middleContent += "<td>" + disStudentList[i].Roll + "</td>";
        middleContent += "<td>" + disStudentList[i].Name + "</td>";

        for(var k = 0 ; k<disAssesmentList.length; k++)
        {
            var assObj = parsed.find(x=>x.Roll === disStudentList[i].Roll  && x.Evaluation === disAssesmentList[k].Evaluation);
            if(assObj != null || assObj != undefined)
            {
                       
                          
                middleContent += "<td>" + assObj.Mark + "</td>";
                perPageMark[k] += assObj.Mark;
                totalPageMark[k] += assObj.Mark;
                           
            }
            else
            {
                middleContent += "<td >" + "-" + "</td>";
                perPageMark[k] += 0;
                totalPageMark[k] += 0;
            }
        }
                 
        for(var j=0;j<disCourseList.length; j++)
        {
            var crcObj = parsed.find(x=>x.Roll === disStudentList[i].Roll  && x.Course === disCourseList[j].Course);
            if(crcObj != null || crcObj != undefined)
            {
                       
                totalCourse++;
                totalGPA += parseFloat(crcObj.GPA);
                middleContent += "<td>" + crcObj.Grade + "</td>";
                middleContent += "<td>" + crcObj.GPA + "</td>";
                           
            }
            else
            {
                middleContent += "<td>" + "-" + "</td>";
                middleContent += "<td>" + "-" + "</td>";
            }
        }
        middleContent += "<td>" + (totalGPA / totalCourse).toFixed(2) + "</td>";
        var remark = (totalGPA / totalCourse).toFixed(2) > 3.30 ? "Good" : "Average";
                       
        middleContent += "<td>" + remark + "</td>";
        middleContent += "</tr>";
                      
                

                 
        

        if(i == disStudentList.length - 1)
        {
            page = page + 1;
            middleContent += "<tr>";
            middleContent += "<td colspan='"+ 3 +"'>Sub Total</td>";
            for(var p=0; p<perPageMark.length; p++)
            {
                middleContent += "<td>"+perPageMark[p] +"</td>";
                perPageMark[p] = 0;
            }
            middleContent += "<td colspan='"+ totalColumn+"'></td>";

            middleContent += "</tr>";
            middleContent += "<tr>";
            middleContent += "<td colspan='"+ 3 +"'>Grand Total</td>";
            for(var p=0; p<totalPageMark.length; p++)
            {
                middleContent += "<td>"+totalPageMark[p] +"</td>";
            }
            middleContent += "<td colspan='"+ totalColumn+"'></td>";

            middleContent += "</tr>";
            middleContent += "</tbody></table>";

            middleContent += "</div><div class='col-sm-1'></div></div>";
            middleContent += FormFooterContent(page);

            middleContent += "</div>";

        }

            




    }

    //middleContent += "</div><div class='col-sm-1'></div></div>";



    return middleContent;




          
}


function PrintReport()
{
    var jsonList = getJSONObject();
            
    var mywindow = window.open('', 'PRINT', 'height=' + 800 + ',width=' + 1600);
    var startHead = '<html><head> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"><style>';

    mywindow.document.write(startHead);
    mywindow.document.write(FormCssString());
    mywindow.document.write(makeResultTable(jsonList));

    mywindow.document.write('</body></html>');


    ////var mywindow = window.open("", "_blank");
    //var html = getHtml1(parsed);
    //mywindow.document.write(html);
    mywindow.document.close();
    mywindow.focus();

             
}

