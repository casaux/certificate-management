$(document).ready(function() {

        var hashURL = window.location.hash;
        hashURL = hashURL.substring(1,hashURL.length);
    var rolename;
if (hashURL=="CEO"){
    rolename="Chief Executive Officer";
}
    if (hashURL=="acc-manager"){
    rolename="Accountable Manager";
}
        if (hashURL=="cont-air-man"){
    rolename="Continuing Airworthiness Manager";
}
        if (hashURL=="head-of-des"){
    rolename="Head of Design";
}
            if (hashURL=="head-of-opp"){
    rolename="Head of Operations";
}
            if (hashURL=="res-man"){
    rolename="Responsible Manager";
}
            if (hashURL=="saf-man"){
    rolename="Safety Manager";
}
            if (hashURL=="trai-man"){
    rolename="Training Manager";
}
    $(".role-name").text(rolename);
   var hashlink=$(".au-btn--primary").attr("href");
    hashlink=hashlink+"#"+hashURL;
    
    
    $(".au-btn--primary").attr("href",hashlink);
    
    
});// JavaScript Document