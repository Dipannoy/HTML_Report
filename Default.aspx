<%@ Page Title="Home Page" Language="VB" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.vb" Inherits="htmlreportingdemo._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <script>
        function LoadReport(val) {
            
            var semId = $('#semester option:selected').text();

            




            var html = forprint(data, semId);

            var mywindow = window.open('', '_blank');
            mywindow.document.write(html);

            mywindow.document.close();
            mywindow.focus();

        }

        function forprint(TotalList,semester) {

            console.log(TotalList);

            var today = new Date();
            var date = '02/12/2020'

            var tbody3 = '';

            tbody3 += '<html>';
            tbody3 += '<head><link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet" ><style> @page  {size: auto;margin: .5in .5in .5in .5in;}  </style><script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" ><\/script>'

                + '  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" ><\/script> <style></style></head> ';
            //+ '  <script> window.setTimeout(() => window.print(), 1000)<\/script>';
        tbody3 += '<body >';

        tbody3 += '<div class="container">';

        tbody3 += '<div class="row">';
        tbody3 += '<div class="col-md-12 col-sm-12 col-xs-12">';
        tbody3 += '<div class="text-center h3 m-0">Institute of Business Administration</div>';
            tbody3 += '<div class="text-center h5 m-0"> Semester: ' + semester +'</div>';
        tbody3 += '<div class="text-center h5 m-0">Grade Sheet</div>';
        tbody3 += '</div>';
        tbody3 += '</div>';

        
        tbody3 += '<div class="row">';
        tbody3 += '<div class="col-md-12 col-sm-12 col-xs-12 mt-2">';
        tbody3 += '<table class="table table-striped table-bordered hoverable" id="myTable2">'
            + '<thead>'
            + '<tr>'
            + ' <th scope="col">SL.</th>'
            //+ '   <th scope="col">Batch</th>'
            + '   <th scope="col">Roll</th>'
            + '   <th scope="col" style="text-align:left;padding-left:5px !important">Student Name</th>'
            + '   <th scope="col">Grade</th>'
            
            + '</tr>'
            + ' </thead>'
            + ' <tbody id="tbody2">';
        var sl = 0;
        for (var i = 0; i < TotalList.length; i++) {
            sl++;

            tbody3 += '<tr>'
            + '<td class="">' + sl + '</td>';
            tbody3 += '<td class="">' + TotalList[i].roll + '</td>';
            tbody3 += '<td class="">' + TotalList[i].name + '</td>';
            tbody3 += '<td class="" style="text-align:left;padding-left:5px !important">' + TotalList[i].grade + '</td>';

            tbody3 += '</tr> ';


        }
        tbody3 += '</tbody></table>';

        tbody3 += '</div>';
        tbody3 += '</div>';


              
        tbody3 += '<div class="row" style="margin-top: 60px; position: fixed;left: 0;bottom: 0;width: 100%;">';
        tbody3 += '<div class="col-6">';
        tbody3 += '<div class="h5 m-0 text-center w-50 ">' + date + '</div>';
        tbody3 += '<div class="h5 m-0 border-top w-50 text-center">Date</div>';
        tbody3 += '</div>';
        tbody3 += '<div class="col-6 ">';
        tbody3 += '<div class="h5 m-0 float-right border-top">Signature of the Faculty</div>';
            tbody3 += '</div>';

        tbody3 += '</div>';

     
        tbody3 += '</body></html>';

            return tbody3;
        }

    </script>
    <div class="jumbotron">
        <h1>Welcome to HTML Reporting</h1>
        <div class="row">
            <div class="col-md-2">
                <label>Semester</label>
            </div>
            <div class="col-md-3">
                <select id="semester" class="form-control">
                    <option value="0">--Select--</option>
                    <option value="1">Fall 2020</option>
                    <option value="2">Summer 2020</option>
                </select>
            </div>
        </div>
        <button class="btn btn-sm btn-primary" type="button" onclick="LoadReport(document.getElementById('semester'))">Load Report</button>

    </div>
    <script>
            var data = [
                {
                    "roll": "011143066",
                    "name": "Sakim",
                    "grade": 'A'
                },
                {
                    "roll": "011143067",
                    "name": "Def",
                    "grade": 'B'
                }
            ];

        var imaginary_dataset_1 = {
            studentlist: [
                {
                    "roll": "011143066",
                    "name": "Sakim",
                    "grade": 'A'
                },
                {
                    "roll": "011143067",
                    "name": "Def",
                    "grade": 'B'
                }
            ],
            studentDues: [
                {
                    "roll": "011143066",
                    "due": 5000
                },
                {
                    "roll": "011143067",
                    "due": 200
                }
            ],
            studentDiscounts: [
                {
                    "roll": "011143066",
                    "discount": 10
                },
                {
                    "roll": "011143067",
                    "discount": 5
                }
            ]

        };

        var imaginary_dataset_2 = [
            {
                "roll": "011143066",
                "name": "Sakim"
            },
            {
                "roll": "011143066",
                "name": "Name"
            }
        ];

        var imaginary_dataset_3 = [
            {
                "roll": "011143066",
                "name": "Sakim"
            },
            {
                "roll": "011143066",
                "name": "Name"
            }
        ];
    </script>
</asp:Content>
