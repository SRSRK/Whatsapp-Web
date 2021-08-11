$(document).ready(function () {
    setTimeout(function() {
        $('.wapp_loading_page').fadeOut();
    }, 3000); 

    setTimeout(function(){
        $(".wapp_load_divider2").animate({
            width:"25%"
        });
    },1500);


    $("body").click(function () {
        // if($(s.target).closest("#bt_options").length == 0)
        // {
        //     $("#bt_options").hide();
        // }
        // alert("kings");
        if ($("#bt_options").is(":visible")) {
            $("#bt_options").hide();
        }
        if ($("#rclk_options").is(":visible")) {
            $("#rclk_options").hide();
        }
        if ($(".chat_user_option").is(":visible")) {
            $(".chat_user_option").hide(200);
        }
        if ($(".attach_icon").is(":visible")) {
            $("#bg_hide").hide();
            $(".attach_icon").hide(200);
        }
        if ($("#user_menu").is(":visible")) {
            $("#user_menu").hide();
        }

    });

    // $(".page2").click(function (e) {
    //     // alert("hiiiii")
    //     z = $("#bt_options").is(":visible")
    //     if (z) {
    //         $("#bt_options").hide();
    //     }
    // });

    //menu button
    $("#menu_bt").click(function (event) {

        x = $("#bt_options").is(":hidden")
        m = $("#rclk_options").is(":visible")

        if (x) {
            $("#bt_options").show();
            $("#user_menu").hide();
            if (m) {
                $("#rclk_options").hide();
            }
        } else {
            $("#bt_options").hide();
            // $(".page2").click(function(){
            //     $("#bt_options").hide();
            // }); 
        }
        event.stopPropagation();
    });

    //bell icon
    $("#bell_clk").click(function () {
        alert("notification");
    });

    //chat icon 
    $("#chat_bt").click(function () {
        // $(".pg1_r1_chat_bt").toggle();
        $(".pg1_r1_chat_bt").animate({
            left: "0px"
        })
        $("#bt_options").hide();

    });
    $("#lft_ar_bt").click(function () {
        // $(".pg1_r1_chat_bt").hide();
        $(".pg1_r1_chat_bt").animate({
            left: "-417px"
        });
    });

    //To show status 
    $("#status_bt").click(function () {
        // $(".pg1_r1_chat_bt").show();
        $(".status_full").animate({
            width: 'toggle'
        });
        $("#bt_options").hide();

    });
    $("#status_close").click(function () {
        // $(".pg1_r1_chat_bt").hide();
        $(".status_full").animate({
            width: 'toggle'
        });
    });

    //To show dp options
    $("#click_dp").click(function () {
        // $("#profile_clk_option").show();
        $("#profile_clk_option").animate({
            left: "0px"
        });
        $("#bt_options").hide();
        $("#rclk_options").hide();
    });
    $(".setting_dp").click(function () {
        $("#profile_clk_option").animate({
            left: "0px"
        });
    });

    $("#clk_profile").click(function () {
        $("#profile_clk_option").animate({
            left: "0px"
        });
    });
    $("#profile_lft_ar_bt").click(function () {
        // $("#profile_clk_option").hide();
        $("#profile_clk_option").animate({
            left: '-417px'
        });
    });

    //settings
    $("#setting_button").click(function () {
        $(".settings").animate({
            width: "toggle"
        });
    });
    $("#setting_arrow").click(function () {
        $(".settings").animate({
            width: 'toggle'
        });
    });

    //notification
    $("#notification_button").click(function () {
        $(".notification").animate({
            left: "50px",
        }, 100);
        $(".notification").show();
    });
    $("#notification_arrow").click(function () {
        $(".notification").animate({
            left: '470px',
        }, 100);
    });

    //theme
    $("#theme_button").click(function () {
        $(".theme_background").fadeIn();
        $(".theme_all").fadeIn(500);
    });
    $("#cancel").click(function () {
        $(".theme_background").fadeOut();
        $(".theme_all").hide();
    });



    //wallpaper chat
    $("#wallpaper_chat_button").click(function () {
        $(".wallpaper_full").show(100);
    });
    $("#wallpaper_arrow").click(function () {
        $(".wallpaper_full").hide(200);
    });


    //checkbox  
    $('#checkbox_image').change(function () {
        if ($(this).is(':checked')) {
            $(".wall_bg_img").show();
            $(".chat_bgimg").show();

        } else {
            $(".wall_bg_img").hide();
            $(".chat_bgimg").hide();

        }
    });


    //to change background color 
    $(".color_1").mouseover(function () {
        z = $(this).css("background-color");
        // $(".wall_bgcol").attr("src","");
        $(".wall_bgcol").css({
            "background-color": z,
        });
    });

    $(".color_1").click(function () {
        z = $(this).css("background-color");
        // $(".color_1").css({"borderColor":red});
        // $(".wall_bgcol").attr("src","");
        $(".wall_bgcol").css({
            "background-color": z,
        });
        $(".chat_display_middle").css({
            "background-color": z,
        });
    });



    // $(".row4_scroll > .pg1_row4").contextmenu(function(a){
    //     console.log(this);
    //     var x = a.pageX;
    //     var y = a.pageY;
    //     $("#rclk_options").css({left: x, top: y}).toggle();  
    // });


    $('.pg1_row4').mousedown(function (event) {
        switch (event.which) {
            case 3:
                var x = event.pageX;
                var y = event.pageY;
                $("#rclk_options").css({
                    left: x,
                    top: y
                }).toggle();
                $("#bt_options").hide();
                $("#user_menu").hide();

                break;
        }
    });

    var copy;
    for (i = 0; i < WAdata.length; i++) {
        copy = $('.clone:eq(0)').clone();
        $('.row4_scroll').append(copy);
        $(copy).find('.pg1_row4_name').html(WAdata[i].name);
        $(copy).find('.pg1_row4_reply').html(WAdata[i].last);
        $(copy).find('.pg1_row4_day').html(WAdata[i].time);
        $(copy).find('.chat_count').html(WAdata[i].noti);
        $(copy).find('.pg1_r1_dp').attr('src', WAdata[i].img);
        notifi = WAdata[i].noti
        if (notifi == 0) {
            $('.chat_count').eq(i + 1).hide();
        };
    }


    //to filter chats
    $("#pg1_row3_search").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".clone").filter(function () {
            $(this).toggle($(this).find(".pg1_row4_name").text().toLowerCase().indexOf(value) >= 0)
        });
        // $(".clone").find(".highlight").removeClass("highlight");
        //     // $(this).find("pg1_row4_name").text()
        // var searchword = $("#pg1_row3_search").val();

        // var custfilter = RegExp(searchword, "ig");
        // var repstr = "<span class='highlight'>" + searchword + "</span>";

        // if (searchword != "") {
        //     $('.clone').each(function () {
        //         $(this).html($(this).html().replace(custfilter, repstr));
        //     })
        // }
    });



    //to hide and show chatting box
    $(".clone").click(function () {
        $(".page2").hide();
        $(".chat_display").show();
    });
    // $("#wallpaper_arrow").click(function () {
    //     $(".wallpaper_full").hide();
    // });

    $("#user_menubt").click(function (event) {
        $(".chat_user_option").toggle(200);
        $("#bt_options").hide();
        event.stopPropagation();
    });

    //to change send/mic icon and chatting
    $("#chat_typebox").keyup(function (event) {
        type = $("#chat_typebox").val();
        store = type;
        mt = $("#chat_typebox").val();
        if (mt.length <= 0) {
            $("#mic").show();
            $("#send").hide();
        } else {
            $("#mic").hide();
            $("#send").show();
        }
        var x = event.keyCode;
        if (x == 13) {
            $(".chat_text").show();
            const d = new Date();
            sec = d.toLocaleTimeString();
            date = sec.replace(sec.substr(5, 3), "");
            $(".time").text(date);
            $("#chatText").append('<div class="chat_msg_time"><p class="msg">' + store + '</p><p class="time">' + date + '</p></div><br>');
            $("#chat_typebox").val("");
        }
    });
    $("#send").click(function () {
        $(".chat_text").show();
        const d = new Date();
        sec = d.toLocaleTimeString();
        date = sec.replace(sec.substr(5, 3), "");
        $(".time").append(date);
        $("#chatText").append('<div class="chat_msg_time"><p class="msg">' + store + '</p><p class="time">' + date + '</p></div><br>');
        $("#chat_typebox").val("");
    });



    //to hide/show attachment options
    $("#attach_bt").click(function (event) {
        $("#bg_hide").toggle();
        $(".attach_icon").toggle(200);
        event.stopPropagation();
    });


    //by change user name and dp

    $(".clone").click(function () {
        username = $(this).find(".pg1_row4_name").text();
        dp = $(this).find('.pg1_row4 img').attr('src');
        $(".chat_userdp").attr("src", dp);
        $(".chat_name").text(username);
    });
});