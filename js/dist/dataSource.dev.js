// JavaScript Document
"use strict";

function getDetails() {
  var strT = "<ul>";
  var strC = "<ul>";
  var strI = "<ul>";
  var strS = "<ul>";
  var strTS = "<ul>";
  var i;
  var techProf = ["Multimedia Adobe", "Web User Interface Design (UI)", "HTML5, CSS3, SCSS, Bootstrap", "cross-browser compatibility", "Web Programming Skills", "JavaScript", "JQuery", "Angular", "C#, ASP MVC, Object Orientated Programming", "Web Api Services (REST/SOAP)", "Sql & NoSql Database Implementation", "Security Principles", "E-Commerce", "Cloud Computing AWS & GCP", "Teamwork & Verbal Communication"].forEach(function (exp) {
    strT += "<li >" + exp + "</li>";
  });
  strT += "</ul>";
  document.getElementById("displayTechProf").innerHTML = strT;
  var courses = ["Systems Analysis & Design", "Computer Programming", "Multimedia Services", "Data Communication & Networking", "Information Communication & Technology"].forEach(function (exp) {
    strC += "<li style='text-align: center'>" + exp + "</li>";
  });
  strC += "</ul>";
  document.getElementById("displayCourses").innerHTML = strC;
  var internIoco = ["Gathered Business Requirements", "Designed Functional Requirements", "Designed Wireframes & Navigation for the Website Application", "Designed in Agile", "Developed the Website", "Applied Continuous Integration", "Scrum", "Built a Relational Database in SQL Server", "Built Restful Web Api Services for CRUD Operations later Migrating from Asp .Net MVC to .NetCore 2.2", "Frontend Dev using Html, SCSS, Bootstrap, Javascript, and JQuery migrating from MVC to Angular 7", "Continuous Integration in Azure DevOps & TFS"].forEach(function (exp) {
    strI += "<li class='wow fadeInUp' data-wow-delay='.5s'>" + exp + "</li>";
  });
  strI += "</ul>";
  document.getElementById("displayExpD").innerHTML = strI;
  ;
  var shadowExp = ["Gained professional experience in developing a website", "Maintaining existing programming code", "Developing new programming code", "Acquired knowledge and skills in the backend development", "Understanding the different frameworks and libraries", "Performing common GitHub commands in day to day workflow activities", "Attending scrum stand up meetings"].forEach(function (exp) {
    strS += "<li class='wow fadeInUp' data-wow-delay='.6s'>" + exp + "</li>";
  });
  strS += "</ul>";
  document.getElementById("displayExpS").innerHTML = strS;
  ;
  var shadowTech = ["Performed and gained experience in help desk support for users", "Remote desktop support and telecommunications", "Installations", "Lockdown ESET app client settings and bypass authentication process", "Personalize advance settings", "Having patience and understanding assistance level clients"].forEach(function (exp) {
    strTS += "<li class='wow fadeInUp' data-wow-delay='.7s'>" + exp + "</li>";
  });
  strTS += "</ul>";
  document.getElementById("displayExpTS").innerHTML = strTS;
}

getDetails();