<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="HtmlReport1.aspx.cs" Inherits="HTML_Report.HtmlReport1" %>



<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <script src="Scripts/JsonObject.js"></script>
    <script src="Scripts/Report1Controller.js"></script>

    <div class="jumbotron" style="padding-top: 100px;">
        <h3>Click following button to show the demonstrated report. </h3>

        <div class="row" style="padding-top: 30px;">
            <button class="btn btn-sm btn-primary" type="button" onclick="PrintReport()">Load Report</button>

        </div>
    </div>

</asp:Content>
