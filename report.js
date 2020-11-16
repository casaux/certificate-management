$(document).ready(function() {

        var hashURL = window.location.hash;
        hashURL = hashURL.substring(1,hashURL.length);
    var reporttype;
if (hashURL=="ACC"){
    reporttype="accident";
}
    if (hashURL=="INC"){
    reporttype="incident";
}
        if (hashURL=="OCC"){
    reporttype="occurance";
}
    $(".reporttype").text(reporttype);
   var hashlink=$(".au-btn--primary").attr("href");
    hashlink=hashlink+"#"+hashURL;
    
    
    $(".au-btn--primary").attr("href",hashlink);
    
    
});// JavaScript Document