// JavaScript File
$(document).ready(function(){
$("#clear").click(function() {
                        $("input").val('');
                    });
    
    
    $("#sub").click(function() {
        var venue = $("#location").val();
        var food = $("#food").val();
             $.getJSON("https://api.foursquare.com/v2/venues/search?near=" + venue + "&query=" + food + "&client_id=NGTFDCMT34TUOBJF0TDZNOVUUZLI0QOS0Q1DIFZYLIBZMUQN&client_secret=XJLFBJ1WWXSHEMALWKJUQ1I4XTFCXSXIULM014QRVHN5GUJT&v=20160319", function(data) {

                    var items = [];
                    $.each(data.response.venues, function(i, val) {
console.log(data.response.venues[i].checkin);
                        items.push("<li id='" + i + "'>" + data.response.venues[i].name + "</li>");
                    });
                    $("#sub").click(function() {
                        $("<ul/>", {
                            "class": "my-new-list",
                            html: items.join("")
                        }).appendTo("#result");
                    });
                    
                });
                });
                    });