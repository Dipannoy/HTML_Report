<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="HTMLReportLab.aspx.cs" Inherits="HTML_Report.HTMLReportLab" %>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">

    <script src="Scripts/JsonObject2.js"></script>
    <script src="Scripts/ReportLabController.js"></script>

    <div class="jumbotron" style="padding-top: 100px;">
        <h3>Click following button to show your lab report. </h3>

        <div class="row" style="padding-top: 30px;">
            <button class="btn btn-sm btn-primary" type="button" onclick="PrintReport()">Load Report</button>

        </div>
    </div>

</asp:Content>
