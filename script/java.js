//scroll on favorites page
//indicates when at what point on scroll test id from css
//file should be applied so that quotes in favorites page is visible
window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        document.getElementById("favSize1").className = "test";
    } else {
        document.getElementById("favSize1").className = "";
    }


    if (document.body.scrollTop > 300|| document.documentElement.scrollTop > 300) {
        document.getElementById("favSize2").className = "test";
    } else {
        document.getElementById("favSize2").className = "";
    }


    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.getElementById("favSize3").className = "test";
    } else {
        document.getElementById("favSize3").className = "";
    }
}


//contacts form
//hides contact form
//when contact button is clicked, shows contact
//when contact button is clicked again, hides contact
$(document).ready(function(){
   $("form").hide();


   $("#contactButton").click(function(){
    $("form").toggle();


    var elmnt = document.getElementById("contact");
    elmnt.scrollIntoView();

});
});

//places div
//hides places div
//when places button is clicked, shows places
//when places button is clicked again, hides places
$(document).ready(function(){
 $(".box").hide();


 $("#placesButton").click(function(){

     $(".box").slideToggle("slow");

     var elmnt = document.getElementById("top");
     elmnt.scrollIntoView();
 });
});

//all facts
//when all facts button is clicked, all facts slide down
//when all facts button is clicked again, all facts slide up
$(document).ready(function(){
    $(".allFact").click(function(){
        $("#bangkokFact").slideToggle("slow");
        $("#lakeComoFact").slideToggle("slow");
        $("#caymanFact").slideToggle("slow");
        $("#zanzibarFact").slideToggle("slow");
        $("#londonFact").slideToggle("slow");
        $("#santoriniFact").slideToggle("slow");
        $("#dubaiFact").slideToggle("slow");
        $("#portoFact").slideToggle("slow");
        $("#jerusalemFact").slideToggle("slow");
        $("#parisFact").slideToggle("slow");
        $("#berlinFact").slideToggle("slow");
        $("#sicilyFact").slideToggle("slow");
        $("#chiangMaiFact").slideToggle("slow");
        $("#maeHongSonFact").slideToggle("slow");
        $("#viennaFact").slideToggle("slow");
        $("#nairobiFact").slideToggle("slow");
        $("#veniceFact").slideToggle("slow");
        $("#kohYaoYaiFact").slideToggle("slow");
        $("#pragueFact").slideToggle("slow");
        $("#romeFact").slideToggle("slow");
        $("#halongBayFact").slideToggle("slow");
    });
});


//FOR ALL BELOW FUNCTIONS, when the button for specified place is clicked
//the fact for that place will slide down
//when clicked again, fact will slide back up

//facts page bangkok div
$(document).ready(function(){
    $(".bangkokFact").click(function(){
        $("#bangkokFact").slideToggle("slow");
    });
});

//facts page lake como div
$(document).ready(function(){
    $(".lakeComoFact").click(function(){
        $("#lakeComoFact").slideToggle("slow");
    });
});

//facts page cayman div
$(document).ready(function(){
    $(".caymanFact").click(function(){
        $("#caymanFact").slideToggle("slow");
    });
});

//facts page zanzibar div
$(document).ready(function(){
    $(".zanzibarFact").click(function(){
        $("#zanzibarFact").slideToggle("slow");
    });
});

//facts page london div
$(document).ready(function(){
    $(".londonFact").click(function(){
        $("#londonFact").slideToggle("slow");
    });
});

//facts page dubai div
$(document).ready(function(){
    $(".dubaiFact").click(function(){
        $("#dubaiFact").slideToggle("slow");
    });
});

//facts page porto div
$(document).ready(function(){
    $(".portoFact").click(function(){
        $("#portoFact").slideToggle("slow");
    });
});

//facts page jerusalem div
$(document).ready(function(){
    $(".jerusalemFact").click(function(){
        $("#jerusalemFact").slideToggle("slow");
    });
});

//facts page paris div
$(document).ready(function(){
    $(".parisFact").click(function(){
        $("#parisFact").slideToggle("slow");
    });
});

//facts page berlin div
$(document).ready(function(){
    $(".berlinFact").click(function(){
        $("#berlinFact").slideToggle("slow");
    });
});

//facts page chiang mai div
$(document).ready(function(){
    $(".chiangMaiFact").click(function(){
        $("#chiangMaiFact").slideToggle("slow");
    });
});

//facts page mae hon song div
$(document).ready(function(){
    $(".maeHongSonFact").click(function(){
        $("#maeHongSonFact").slideToggle("slow");
    });
});

//facts page nairobi div
$(document).ready(function(){
    $(".nairobiFact").click(function(){
        $("#nairobiFact").slideToggle("slow");
    });
});

//facts page koh yao yai div
$(document).ready(function(){
    $(".kohYaoYaiFact").click(function(){
        $("#kohYaoYaiFact").slideToggle("slow");
    });
});

//facts page ha long bay div
$(document).ready(function(){
    $(".halongBayFact").click(function(){
        $("#halongBayFact").slideToggle("slow");
    });
});

//facts page prague div
$(document).ready(function(){
    $(".pragueFact").click(function(){
        $("#pragueFact").slideToggle("slow");
    });
});

//facts page rome div
$(document).ready(function(){
    $(".romeFact").click(function(){
        $("#romeFact").slideToggle("slow");
    });
});

//facts page santorini div
$(document).ready(function(){
    $(".santoriniFact").click(function(){
        $("#santoriniFact").slideToggle("slow");
    });
});

//facts page sicily div
$(document).ready(function(){
    $(".sicilyFact").click(function(){
        $("#sicilyFact").slideToggle("slow");
    });
});

//facts page venice div
$(document).ready(function(){
    $(".veniceFact").click(function(){
        $("#veniceFact").slideToggle("slow");
    });
});

//facts page vienna div
$(document).ready(function(){
    $(".viennaFact").click(function(){
        $("#viennaFact").slideToggle("slow");
    });
});
